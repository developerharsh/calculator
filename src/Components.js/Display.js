import React, { Component } from 'react'

class Display extends Component {

    render() {
        return (
            <div className="display">
                <p>{this.props.ans}</p>    
            </div>
        )
    }
}

export default Display
