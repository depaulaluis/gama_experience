import React , {Component} from 'react';
import './App.css';
import logo  from './logo.svg';
import frases from './frases';



class App extends Component {
  state={
    value:''
  }

  gerador_de_frase = async()=>{
    const url = 'https://api.chucknorris.io/jokes/random';
    const response = await fetch(url).then(response => response.json());
    const value = response.value;
    this.setState ({ value });   
    
  }
  

  render(){
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.value} 
        </p>
        <button onClick = {this.gerador_de_frase} >Gerar frases</button>          
      </header>
    </div>
  );
}
}
export default App;

