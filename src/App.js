import './App.css';
import HomePage from './Pages/home';
import Bracket from './Pages/bracket';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateParties = this.updateParties.bind(this);
    this.state = {
      partyCount: 0,
      parties: [],
      createBracket: false,
    }
  }
  render() {


    if(this.state.createBracket){
    return (
      <div className="App">
        <Bracket partyCount={this.state.partyCount} parties={this.state.parties} />
      </div>
    );
    }
    else{
      return(
        <div className="App">
          <HomePage setParties={this.updateParties}/>
        </div>
      )
    }
  }
  

  updateParties(newParties){
    let length = newParties.length;
    this.setState({
      parties: newParties,
      partyCount: length,
      createBracket: true,
    });
  }

}

export default App;
