import React, { Component } from 'react';
import technysis from './images/technysis.png'

class Header extends Component {
    render(){
        const { title } = this.props;
        return(
        <div className="row full-width no-margin bg-blue-light">
            <div className="col-md-12 py-3">
                <img src={technysis} className="logo" alt="logo" />
                <p className="no-margin pt-1">{title}</p>
            </div>
        </div>
        )
    }
}

export default Header;