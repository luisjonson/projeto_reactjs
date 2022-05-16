import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import './App.css';

function App() {

  const nome ='Jonson'
  

  const url =  'https://via.placeholder.com/100'
  return (
    <div className="App">
      <SayMyName name = "Jonson"/>
      <Pessoa nome="Jonson" idade="33" profissao="Programador" foto="https://via.placeholder.com.150"/>
    </div>
  );
}

export default App;
