import React , {Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
/*import { directive } from '@babel/types';*/

import Entrada from './Entrada';
import Usuario from './Usuario';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Entrada />
      <Usuario />
    </div>
  );
}
}

export default App;
