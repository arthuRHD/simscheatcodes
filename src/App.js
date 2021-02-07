import logo from './logosims.svg';
import GroupedSelect from './components/skills';
import ScrollableTabsButtonForce from './components/commands';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <img src={logo} alt="logo" />
        <p>
          Pour saisir un code en jeu, appuyez sur <code>CTRL + MAJ + C</code> et tapez <code>testingcheats on</code>.
        </p>
        <ScrollableTabsButtonForce/>
        <br></br>
      </header>
    <div className="footer"></div>
    </div>
  );
}

export default App;
