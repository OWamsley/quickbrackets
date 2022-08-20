import React from 'react';
import Header from '../Components/Header/index';
import Counter from '../Components/Counter/index';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.incPartyCount = this.incPartyCount.bind(this);
        this.decPartyCount = this.decPartyCount.bind(this);
        this.state = {
            partyCount: 4
        };
    }
    render(){
        return(
        <>
            <Header/>
            <Counter partyCount={this.state.partyCount} decreaseCount={this.decPartyCount} increaseCount={this.incPartyCount} />

        </>)
    }

    incPartyCount(){
        if(this.state.partyCount >= 16){
            //16 is max size for bracket
            return;
        }
        this.setState((prevState, props) => ({
            partyCount: prevState.partyCount + 1
        }));     
    }
    decPartyCount(){
        if(this.state.partyCount <= 3){
            //3 is min size for bracket
            return;
        }
        this.setState((prevState, props) => ({
            partyCount: prevState.partyCount -1
        }));     
    }

}

export default HomePage;