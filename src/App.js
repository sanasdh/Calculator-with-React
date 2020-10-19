import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      value:null
    }

  }
  render(){
  return (
    <div className="App">
      <header className="App-header"> 
     <h1> My React Calculator </h1>
      </header>
      <div className="outerBox">
        <div className="outPut">

        </div>

        <div className="input">
          <div className="numbers">
            <div className="number" id="7">7</div>
            <div className="number" id="8">8</div>
            <div className="number" id="9">9</div>
            <div className="number" id="4">4</div>
            <div className="number" id="5">5</div>
            <div className="number" id="6">6</div>
            <div className="number" id="1">1</div>
            <div className="number" id="2">2</div>
            <div className="number" id="3">3</div>
            <div className="number" id="0">0</div>
            <div className="number" id="00">00</div>
            <div className="number" id="dot">.</div>

          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
