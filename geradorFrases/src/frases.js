import React, {Component} from 'react';

class frases extends Component {
    render(){
        return(
        <div>
            <input type="text" value={this.props.valor} onChange={this.props.onInputChange} />
        <button onClick={this.props.onButtonClick}>Procurar</button>
        </div>
        )
    }
}

export default frases;