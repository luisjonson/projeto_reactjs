import Evento from './components/Evento';
import Form from './components/Form';
import './App.css';

function App() {

  const nome ='Jonson'
  

  const url =  'https://via.placeholder.com/100'
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero= "1"/>
      <Evento numero= "2"/>
      
      <Form/>
      
    </div>
  );
}

export default App;
