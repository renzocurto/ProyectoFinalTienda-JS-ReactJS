import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOnXksav39rtBEZZmi_XAgLODcOaeRG2c",
  authDomain: "mi-primer-react-50bed.firebaseapp.com",
  projectId: "mi-primer-react-50bed",
  storageBucket: "mi-primer-react-50bed.appspot.com",
  messagingSenderId: "676372764562",
  appId: "1:676372764562:web:778fcf56185a847b9bd34b"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
