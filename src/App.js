import './App.css';
import HomePage from './Pages/home';
import Bracket from './Pages/bracket';

function App() {
  return (
    <div className="App">
      <Bracket partyCount={7} parties={["albert","ben","charlie","dane","emma","frank","gerald","hannah","isabelle","jules","kat","leah","mom","noah","owen","penny"]} />
    </div>
  );
}

export default App;
