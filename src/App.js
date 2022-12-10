import logo from './logo.svg';
import './App.css';
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
