import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Component/Button';
class App extends Component {
  constructor(props){
    super();
    this.state={Increment:0 , Decrement:0}
  }
  componentWillMount(){
    console.log("Component will mount")
  }
  componentDidMount(){
    console.log("Component Did mount")
  }
  componentWillUpdate(){
    console.log("Component Will Update")
  }
  componentDidUpdate(){
    console.log("Component Did Update");
  }
  componentWillUnmount(){
    console.log("Component will Unmount")
  }
  handleIncrement=(e)=>{
    this.setState({Increment:this.state.Increment+1})
  }
  handleDecrement=(e)=>{
    this.setState({Decremnt:this.state.Decrement+1})
  }
  render() {
    console.log("in render")
    return (
      <div >
        <p>Number of click of Increment{this.state.Increment}</p>
        <p>Number of click of Decrement{this.state.Decrement}</p>
       <Button name="Increment" incrementClick={this.handleIncrement}/>
       <Button name="Decrement" decrementClick={this.handledecrement}/>
      </div>
    );
  }
}

export default App;
