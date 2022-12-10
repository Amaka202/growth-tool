import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA87d_JQOPrRQkP7ZZAnH_tT8sddZwP8Uc",
    authDomain: "backend-aecc3.firebaseapp.com",
    projectId: "backend-aecc3",
    storageBucket: "backend-aecc3.appspot.com",
    messagingSenderId: "934403029357",
    appId: "1:934403029357:web:76f4c5d3b4c12c40cf0264"
  };
  
  export const app = initializeApp(firebaseConfig);