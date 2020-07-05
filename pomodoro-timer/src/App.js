import React from 'react';
import Timer from './components/Timer';
import './App.css';
import './assets/css/material-kit.css';

function App() {
  return (
    <div className="App">
      <main class="container-fluid">
        <section class="container text-center">
          <div class="row">
            <div class="col">
              <h1>Pomodoro Clock</h1>
              <p>This website was built to give people an edge in time management skills.</p>
              <p>Development is ongoing.</p>
            </div>
          </div>
        </section>
        <section class="container text-center">
          <Timer />
        </section>
      </main>
      <footer class="container-fluid py-4">
        <div class="container">
            <div class="row">
                <div class="col my-1">
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
