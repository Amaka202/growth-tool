import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA87d_JQOPrRQkP7ZZAnH_tT8sddZwP8Uc",
  authDomain: "backend-aecc3.firebaseapp.com",
  projectId: "backend-aecc3",
  storageBucket: "backend-aecc3.appspot.com",
  messagingSenderId: "934403029357",
  appId: "1:934403029357:web:76f4c5d3b4c12c40cf0264"
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
