import React, { Component } from 'react';

// A cell needs to have:
//  Left Party, Right Party
//  Left Child, Right Child
//  parent cell
//  align (is it the parent's right or left child?)

export class Cell extends Component {
    
    
    render() {
        return (
            <div>-----------------------------
                <div>left= {this.props.left}</div>
                <div>right= {this.props.right}</div>
                <div>no= {this.props.no}</div>
            </div>
        )
    }
}

export default Cell;