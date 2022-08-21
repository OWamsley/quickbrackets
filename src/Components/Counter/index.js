import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            How many Competitors?            
            <button onClick={this.props.decreaseCount}>-</button>
            {this.props.partyCount}
            <button onClick={this.props.increaseCount}>+</button>

        </div>
        );
    }
    
}

export default Counter;