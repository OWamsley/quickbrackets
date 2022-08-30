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
        if(this.props.left!= null && this.props.right!= null){
            var clickable = true;
        }
        else{
            var clickable = false;
        }
        return (
            <div style={style}>
                <div><button disabled={!clickable} onClick={() => this.props.updateCell( this.props.left, this.props.parentNo, this.props.no)}>{this.props.left}</button> </div>
                <div><button disabled={!clickable} onClick={() => this.props.updateCell( this.props.right, this.props.parentNo, this.props.no)}>{this.props.right}</button> </div>
                
            </div>
        )
    }
}

export default Cell;