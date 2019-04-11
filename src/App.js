import React, { Component } from 'react';
import axios from 'axios';

import './sass/index.scss'

import Header from './Header'
import ShowData from './ShowData'

class App extends Component {

  componentDidMount(){
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ImSeAs20u1fr8smKkbQ1dg9GFfzHSLv0Iyfkc12C')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  render() {
    return (
      <div>
        <div className="App">
          <Header title="Prueba tecnica. Reactjs"/>
        </div>
        <ShowData/>
      </div>
    );
  }
}

export default App;
