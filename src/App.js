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
    this.setState({
        ans: buttonName
    })
}

calculate=()=>{
  this.setState({
    ans: eval(this.state.ans)
  })
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
