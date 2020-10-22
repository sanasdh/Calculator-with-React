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
      first:false,
      operation: [],
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
console.log("value");
console.log(this.state.value);
console.log("this.state.value.length");
console.log(this.state.value.length);

  }

  handleOperand=(e)=>{
    e.preventDefault()
    console.log("value");
    console.log(this.state.value);
    let count=0
    if(e.target.className=== "operation"){
      let newValue1 = parseFloat(this.state.value1.join(''));
      console.log({newValue1});
      this.setState({
        value: [...this.state.value, newValue1],
        value1:[],
        readout:0,
        operation: [...this.state.operation, e.target.id],
      })
      }
    }

    handleSubmit=(e)=>{
      e.preventDefault()
      let newValue1 = parseInt(this.state.value1.join(''))
      console.log({newValue1});
      let value= [...this.state.value]
      value.push(newValue1)
      let result =this.state.value[0];
      console.log({value});
      for(let i=0; i<value.length-1;i++){            
        if (this.state.operation[i] == "add") {
          result=result+value[i+1]       
          }

        if (this.state.operation[i] == "subtract") {
          result=result-value[i+1]       
          }
        if (this.state.operation[i] == "multiply") {
          result=result*value[i+1]       
          }
        if (this.state.operation[i] == "divide") {
          result=result/value[i+1]       
          }
        if (this.state.operation[i] == "mud") {
          result=result%value[i+1]       
          }
          console.log({result});
      }
      console.log({result});
      let opLength=this.state.operation.length
      console.log({opLength});
        console.log({result});

      this.setState({
        readout: result
      })
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
            <div className="number" id="dot" onClick={this.handleClick}>.</div>
          </div>

          <div className="operations">
          <div className="operation" id="divide" onClick={this.handleOperand}>÷</div>
          <div className="operation" id="mud" onClick={this.handleOperand}>%</div>
          <div className="operation" id="multiply" onClick={this.handleOperand}>x</div>
          <div className="operation" id="subtract" onClick={this.handleOperand}>-</div>
          <div className="operation" id="add" onClick={this.handleOperand}>+</div>
          <div className="operation" id="equ" onClick={this.handleSubmit}>=</div>


          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
