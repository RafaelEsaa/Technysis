import React, { Component } from 'react';
import technysis from './images/technysis.png'
import './sass/index.scss'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <div className="row full-width no-margin">
              <div className="col-md-12">
                <img src={technysis} className="logo" alt="logo" />
              </div>
            </div>
          </header>
        </div>
        <div className="row full-width no-margin">
          <div className="col-md-2 ">
            <p>Hola!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
