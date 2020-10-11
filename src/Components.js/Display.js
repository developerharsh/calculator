import React, { Component } from 'react'
import Buttons from './Buttons'

class Display extends Component {

    render() {
        return (
            <div>
                <p>{this.props.ans}</p>    
            </div>
        )
    }
}

export default Display
