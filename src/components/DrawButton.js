import React, { Component } from 'react';
import './DrawButton.css'

class DrawButton extends Component {

    drawCard = ()=>{
        this.props.drawCard()
    }
    render() {
        return (
            <div className="buttonContainer">
                <button className="btn" onClick={this.drawCard}>Draw Card</button>
            </div>
        );
    }
}

export default DrawButton;