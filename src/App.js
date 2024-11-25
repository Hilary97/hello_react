import logo from './logo.svg';
import './App.css';
import Component from './component';
import img from './foto mi mi amor.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        
        <p>
          Hola mi amor 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pagina de REACT
        </a>
        <Component/>
         
      </header>
    </div>
    
  );
}

export default App;
