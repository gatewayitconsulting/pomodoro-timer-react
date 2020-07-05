import React from 'react';
import logo from './logo.svg';
import Timer from './components/Timer';
import './App.css';
import './assets/css/material-kit.css';

function App() {
  return (
    <div className="App">
      <main class="container-fluid">
        <Timer />
      </main>
    </div>
  );
}

export default App;
