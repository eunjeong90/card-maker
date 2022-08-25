import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUpload from './service/image_upload';
import ImageFileInput from './components/ImageFileInput/ImageFileInput';

const root = ReactDOM.createRoot(document.getElementById('root'));
const authService = new AuthService();
const imageUpload = new ImageUpload();
const FileInput = (props) => {
  return <ImageFileInput {...props} imageUpload={imageUpload} />;
};
root.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>
);
