import React from 'react';
import Timer from './components/Timer';
import './App.css';
import './assets/css/material-kit.css';

function App() {
  return (
    <div className="App">
      <main className="container-fluid">
        <section className="container text-center">
          <div className="row">
            <div className="col">
              <h1>Pomodoro Clock</h1>
              <p>This website was built to give people an edge in time management skills.</p>
              <p>Development is ongoing.</p>
            </div>
          </div>
        </section>
        <section className="container text-center">
          <Timer />
        </section>
      </main>
      <footer className="container-fluid py-4">
        <div className="container">
            <div className="row">
                <div className="col my-1">
                    &copy;
                    2020, Website by <a href="https://www.gatewayitconsulting.com" target="_blank" rel="noopener">Gateway IT Consulting</a>.
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
