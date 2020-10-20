import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      value:[],
      value1:[],
      result: 0,
      readout:0,
    }
  }
  handleClick=(e)=>{
    e.preventDefault()
if(e.target.className ==="number"){
  let val= e.target.innerHTML
  this.setState({
    value1:[...this.state.value1, val],
    readout: [...this.state.value1, val],
  })
}
  }

  handleOperand=(e)=>{
    e.preventDefault()
    if(e.target.className=== "operation"){
let newValue1 = parseInt(this.state.value1.join(''))
this.setState({
  value: [...this.state.value, newValue1],
  value1:[],
  readout:0
})
console.log({newValue1});
console.log(typeof newValue1);
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
{this.state.readout}
        </div>

        <div className="input">
          <div className="numbers">
            <div className="number" id="seven" onClick={this.handleClick}>7</div>
            <div className="number" id="8" onClick={this.handleClick}>8</div>
            <div className="number" id="9" onClick={this.handleClick}>9</div>
            <div className="number" id="4" onClick={this.handleClick}>4</div>
            <div className="number" id="5" onClick={this.handleClick}>5</div>
            <div className="number" id="6" onClick={this.handleClick}>6</div>
            <div className="number" id="1" onClick={this.handleClick}>1</div>
            <div className="number" id="2" onClick={this.handleClick}>2</div>
            <div className="number" id="3" onClick={this.handleClick}>3</div>
            <div className="number" id="0" onClick={this.handleClick}>0</div>
            <div className="number" id="00" onClick={this.handleClick}>00</div>
            <div className="number" id="dot">.</div>
          </div>

          <div className="operations">
          <div className="operation" id="div" onClick={this.handleOperand}>÷</div>
          <div className="operation" id="mud" onClick={this.handleOperand}>%</div>
          <div className="operation" id="mult" onClick={this.handleOperand}>x</div>
          <div className="operation" id="sub" onClick={this.handleOperand}>-</div>
          <div className="operation" id="add" onClick={this.handleOperand}>+</div>
          <div className="operation" id="equ" onClick={this.handleOperand}>=</div>


          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
