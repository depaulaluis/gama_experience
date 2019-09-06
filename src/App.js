import React , {Component} from 'react';
/*import logo  from './logo.svg';*/
import './App.css';
/*import { directive } from '@babel/types';*/

import Entrada from './Entrada';
import Usuario from './Usuario';


class App extends Component {
  state = {
    usuario: '',
    info: null,
    erro: false,
    loading: false
  }

  onInputChange = (event) => {
    this.setState({
      usuario: event.target.value
    })
  }

onButtonClick = () => {
  this.setState({loading: true});
  const {usuario} = this.state;
  fetch(`https://api.github.com/users/$(usuario)`)
  .then(data => data.json())
  .then(info => {
    this.setState({info, loading:false})
  })
  .catch(erro =>{
    this.setState({
      erro: true, loading:false
    })
  })
}
  buildBlocoUsuario = () => {
    if(this.state.erro) return "Opssssssss, deu erro!";
    if(this.state.loading) return "Carregando ...";
    if(this.state.info) return <Usuario info={this.state.info}/>;

  return <div></div>;
  }

  render(){
    const blocoUsuario = this.buildBlocoUsuario();

  return (
    <div className="App">
      <Entrada 
      valor={this.props.usuario} 
      onInputChange={this.onInputChange}
      onButtonClick={this.onButtonClick}
      />
      {blocoUsuario}
    </div>
  );
}
}

export default App;
