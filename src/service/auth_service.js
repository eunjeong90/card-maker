import firebase from 'firebase';
import firebaseApp from './firebase';

function AuthService() {
  AuthService.prototype.login = function (providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  };
  AuthService.prototype.logout = function () {
    firebase.auth().signOut();
  };
  AuthService.prototype.onAuthChange = function (onUserChange) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChange(user);
    });
  };
}

export default AuthService;
