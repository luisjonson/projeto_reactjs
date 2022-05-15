import logo from './logo.svg';
import HelloWorld from './components/HelloWorld';
import './App.css';

function App() {

  const nome ='Jonson'
  const newName = nome.toUpperCase()

  function sun(a,b){
    return a + b
  }

  const url =  'https://via.placeholder.com/100'
  return (
    <div className="App">
     <h1>OLÁ ESSE É MEU PRIMEIRO COMANDO EM REACT.</h1>
     <p>Olá, {newName}</p>
     <p>soma: {sun(1,4)}</p>
     <img src={url} alt="Goolge"/>
     <HelloWorld />
    </div>
  );
}

export default App;
