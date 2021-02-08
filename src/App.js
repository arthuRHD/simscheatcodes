import Logo from './components/mainLogo';
import ScrollableTabsButtonForce from './components/commands';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <Logo/>
        <p>
          Pour saisir un code en jeu, appuyez sur <code>CTRL + MAJ + C</code> et tapez <code>testingCheats on</code>.
        </p>
        <ScrollableTabsButtonForce/>
        <br></br>
      </header>
    <div className="footer"></div>
    </div>
  );
}

export default App;
