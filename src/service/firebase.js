import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_REALTIME_DATABASE,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

firebase.initializeApp(firebaseConfig);
