import logo from './logo.svg';
import './App.css';
import Example from './components/Example';
import React from "react";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
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
      <>
        <h1>This is the Firestore collection</h1>
        <Example />
      </>
    </div>
  );
}

export default App;
