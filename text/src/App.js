// import logo from './logo.svg';
import './App.css';
import Texteditor from './Componets/Texteditor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1>React Text Editor</h1>
      </header>
      <div className="editor">
        <Texteditor />
      </div>
    </div>
  );
}

export default App;
