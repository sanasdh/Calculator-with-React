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
  }

  handleOperand=(e)=>{
    e.preventDefault()
    if(e.target.className=== "operation"){
      let newValue1 = parseInt(this.state.value1.join(''))
      this.setState({
        value: [...this.state.value, newValue1],
        value1:[],
        readout:0,
      })
      let length=this.state.value.length
      console.log({length});
      console.log("value");
      console.log(this.state.value);
      if(this.state.value.length===1){
        console.log("herreee");
        this.setState({
          result: this.state.value[0]
        })
      }
      if(this.state.operation==null){
        this.setState({
          operation: [...this.state.operation, e.target.id]
        })
      }
      else if(this.state.operation!==null){
        console.log(this.state.operation);
        console.log("here");       
      // operations
      let opLength=this.state.operation.length
      if (this.state.operation[opLength-1] == "add") {
        let v1 = this.state.result;
        console.log({v1});
        let v2 = this.state.value[length];
        console.log({v2});
        let result = v1 + v2;
        this.setState({
          readout: result,
          result: result,
        })
      }

      if (this.state.operation[opLength-1] == "subtract") {
        let v1 = this.state.result;
        let v2 = this.state.value[length];
        console.log({v2});
        let result = v1 - v2;
        this.setState({
          readout: result,
          result: result,
        })
      }

      if (this.state.operation[opLength-1] == "multiply") {
        let v1 = this.state.result;
        let v2 = this.state.value[length];
        let result = v1 * v2;
        this.setState({
          readout: result,
          result: result,
        })
      }

      if (this.state.operation[opLength-1] == "divide") {
        let v1 = this.state.result;
        let v2 = this.state.value[length];
        let result = v1 / v2;
        this.setState({
          readout: result,
          result: result,
        })
      }

      this.setState({
        operation: [...this.state.operation, e.target.id]
      })

      }

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
          <div className="operation" id="divide" onClick={this.handleOperand}>÷</div>
          <div className="operation" id="mud" onClick={this.handleOperand}>%</div>
          <div className="operation" id="multiply" onClick={this.handleOperand}>x</div>
          <div className="operation" id="subtract" onClick={this.handleOperand}>-</div>
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
