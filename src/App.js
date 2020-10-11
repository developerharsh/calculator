import React, { Component } from 'react';
import Buttons from './Components.js/Buttons';
import Display from './Components.js/Display';
import './App.css'

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
  else if(buttonName=="CE")
    this.backspace();
  else if(buttonName=="C")
    this.reset();
  else
  {
    this.setState({
        ans: this.state.ans+buttonName
    })
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
    ans: eval(this.state.ans)
  })}
  catch(e){
    // this.setState({
    //   ans: "Error"
    // })
  }
}

  render(){
  return (
    <div className="App">
      <Display ans={this.state.ans}></Display>
      <Buttons buttonPressed={this.buttonPressed}></Buttons>
    </div>
  );
}

}
export default App;
