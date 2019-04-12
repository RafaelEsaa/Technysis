import React, { Component } from 'react'

class ShowData extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: null
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    return {
      data: nextProps.data
    }
  }

  render () {
    return (
      <div>
        <h3>{this.state.data.title}</h3>
        <img src={this.state.data.url} className='img-fluid img-hole-black' alt='hole black' />
        <div className='pt-4'>
            <p>Date: {this.state.data.date}</p>
            <p>Explanation: {this.state.data.explanation}</p>
        </div>
      </div>
    )
  }
}

export default ShowData
