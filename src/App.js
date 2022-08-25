import './App.css';
import HomePage from './Pages/home';
import Bracket from './Pages/bracket';

function App() {
  return (
    <div className="App">
      <Bracket partyCount={16} parties={["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"]} />
    </div>
  );
}

export default App;
//<Bracket partyCount={9} parties={["a","b","c","d","e","f","g","h","i"]} />