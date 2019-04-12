import React, { Component } from 'react'

class BtnShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
  }

  handleToggle () {
    this.setState({
      show: !this.state.show
    })
    this.props.receiveShow(this.state.show)
  }

  render () {
    return (
      <div>
        <button className='btn btn-show' onClick={() => this.handleToggle()}>
          {(this.state.show) ? 'Show Data' : 'Hidden Data'}
        </button>
      </div>
    )
  }
}

export default BtnShow
