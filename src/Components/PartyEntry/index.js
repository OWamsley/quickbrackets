import React, { Component } from 'react';

class PartyEntry extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            parties: []
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        //check if all parties have a name. 
        
        for (let party of this.state.parties) {
            if (party == null || party.Name == "") {
                console.log("empty name found");
                return;
            }
        }

        this.props.updateParties(this.state.parties);
    }

    handleChange(event) {
        console.log(event.target.name);
        let updateparties = [... this.state.parties];
        if (updateparties[event.target.name] == null) {
            const party = {
                Name: event.target.value,
                Number: event.target.name
            }
            updateparties[event.target.name] = party;
        }
        else {
            updateparties[event.target.name].Name = event.target.value;
            updateparties[event.target.name].Number = event.target.name;
        }
        this.setState({
            parties: updateparties
        });
    }



    render() {
        let nameEntries = [];
        for (let i = 0; i < this.props.partyCount; i++) {
            nameEntries.push(<>
                <label>
                    {i + 1}
                    <input type="text"  name={i} onChange={this.handleChange} />
                </label>
            </>)
        }
        return (
            <>
                partyCount
                {this.props.partyCount}
                <form onSubmit={this.handleSubmit}>
                    {nameEntries}
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}
export default PartyEntry;
