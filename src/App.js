import React, { Component } from 'react'

import './sass/index.scss'

import Header from './Header'
import BodyData from './BodyData'

class App extends Component {
  render () {
    return (
      <div>
        <div className='App'>
          <Header title='Prueba tecnica. Reactjs' />
        </div>
        <BodyData />
      </div>
    )
  }
}

export default App
