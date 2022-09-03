import React from 'react';
import Header from '../Components/Header/index';
import Counter from '../Components/Counter/index';
import PartyEntry from '../Components/PartyEntry/index';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.incPartyCount = this.incPartyCount.bind(this);
        this.decPartyCount = this.decPartyCount.bind(this);
        this.updateParty = this.updateParty.bind(this);
        this.updateParties = this.updateParties.bind(this);
        this.state = {
            partyCount: 4,
            parties: [{
                Number: 1,
                Name: "joe"
            }]
        };
    }
    render(){
        const parties = this.state.parties.map((party)=> <>{party.Number}{party.Name}</>)
        return(
        <>
            <Header/>
            
            <Counter partyCount={this.state.partyCount} decreaseCount={this.decPartyCount} increaseCount={this.incPartyCount} />
            <PartyEntry updateParties={this.updateParties} partyCount={this.state.partyCount} updateParty={this.state.updateParty} />
        </>)
    }

    

    updateParty(number, name){
        //Number needs to be index of party array i.e. the first name entry labeled 1 on
        //screen needs to have number 0.
        let updateparties = [... this.state.parties];
        updateparties[number].Name = name;
        updateparties[number].Number = number;
        this.setState({
            parties: updateparties
        });
        
    }

    updateParties(updateParties){
        this.setState(
            {parties: updateParties}
        );
        let partynames = [];
        for(let party of updateParties){
            partynames.push(party.Name);

        }
        this.props.setParties(partynames);
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