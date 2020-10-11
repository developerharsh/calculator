import React, { Component } from 'react';
import Buttons from './Components.js/Buttons';
import Display from './Components.js/Display';
import './App.css'
import './Styling.css'

class App extends Component{
  constructor(props) {
    super(props)

    this.state = {
         ans: ''
    }
}

buttonPressed= buttonName => {

  if(buttonName==='=')
    this.calculate();
  else if(buttonName==="CE")
    this.backspace();
  else if(buttonName==="C")
    this.reset();
  else
  {
    if((buttonName==="+" || buttonName==="*" ||buttonName==="-"||buttonName==="/")&& (this.state.ans.endsWith('+')|| this.state.ans.endsWith('-')|| this.state.ans.endsWith('*') || this.state.ans.endsWith('/')))
    {
      this.setState({
        ans:this.state.ans.slice(0,-1)+buttonName
      })
    }
    else
    {
      this.setState({
        ans: this.state.ans+buttonName
    })}
  }
}

backspace=()=>{
  this.setState({
    ans: this.state.ans.slice(0,-1)
  })
}

reset=()=>{
  this.setState({
    ans:""
  })
}

calculate=()=>{
  try{this.setState({
    ans: eval(this.state.ans).toString()
  })}
  catch(e){
    // this.setState({
    //   ans: "Error"
    // })
    console.log(e);
  }
}

  render(){
  return (
    <div className="App" className="body">
      <Display ans={this.state.ans}></Display>
      <Buttons buttonPressed={this.buttonPressed}></Buttons>
    </div>
  );
}

}
export default App;
