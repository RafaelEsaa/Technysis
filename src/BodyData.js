import React, { Component } from 'react'
import axios from 'axios'

import BtnShow from './BtnShow'
import ShowData from './ShowData'

class BodyData extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataApod: null,
      showData: false
    }
  }

  componentDidMount () {
    this.getDataNasa()
  }

  getDataNasa () {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ImSeAs20u1fr8smKkbQ1dg9GFfzHSLv0Iyfkc12C')
      .then(response => {
        // handle success
        this.setState({
          dataApod: response.data
        })
        console.log(response, 'data')
      })
      .catch(error => {
        // handle error
        console.log(error, 'error')
      })
      .then(() => {
        // always executed
      })
  }

  showInfo (showData) {
    this.setState({ showData })
  }

  render () {
    return (
<div className='row full-width no-margin'>
<div className='col-md-12 pt-4'>
    <BtnShow
    receiveShow={(data) => this.showInfo(data)}
    />
</div>
{(this.state.showData)
    ? <div className='col-md-12 py-4'>
    <ShowData data={this.state.dataApod} />
    </div>
    : ''
}
</div>
    )
  }
}

export default BodyData
