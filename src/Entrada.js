import React, {Component} from 'react';

class Entrada extends Component {
    render(){
        return(
        <div>
        <span>Entrada</span>
        <input type="text" value={this.props.valor} onChange={this.props.onInputChange} />
        <button>Procurar</button>
        </div>
        )
    }
}

export default Entrada;