import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'

function App() {

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome={"Pedro"}/>
      <SayMyName nome={"Cláudio"}/>
      <SayMyName nome={"Chris"}/>
      <Pessoa
        nome="Adryan"
        idade="21"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
