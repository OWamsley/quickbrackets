import React, { Component } from 'react';

// A cell needs to have:
//  Left Party, Right Party
//  Left Child, Right Child
//  parent cell
//  align (is it the parent's right or left child?)

export class Cell extends Component {
    
    
    render() {
        const style={
            flex:1,
            alignSelf: "center",
            padding:10,
           
        }
        var left;
        var right;
        try {
            left= this.props.leftCell.no;
        } catch (error) {
            
        }
        try {
            right= this.props.rightCell.no;
        } catch (error) {
            
        }

        return (
            <div style={style}>
                <div>no= {this.props.no}</div>
                <div>left= {this.props.left}</div>
                <div>right= {this.props.right}</div>
                
                <div>leftChild= {left}</div>
                <div>rightChild= {right}</div>
            </div>
        )
    }
}

export default Cell;