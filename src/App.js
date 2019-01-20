import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Validation from './assignment/Validation';
import Char from './assignment/Char';

class App extends Component {
  state = {
    userin:""
  }
  deletecharhandeler= (index) =>{
    const text =this.state.userin.split('');
    text.splice(index, 1);
    const updatedtext = text.join('');
    this.setState({userin : updatedtext});
    }

 
  lengthhandler = (event) => {
    this.setState({userin:event.target.value});
  }
  render() {

    const comp= this.state.userin.split('').map((ch, index) => {
    return <Char 
    character={ch} 
    key={index}
    del={ () => this.deletecharhandeler(index)}/>;
  
  });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
          <input type="text" onChange={this.lengthhandler} value={this.state.userin} />
          <p>{this.state.userin}</p>
          </div>
          <Validation inputlen={this.state.userin.length}/>
          {comp}     
        </header>
      </div>
    );
  }
}

export default App;
