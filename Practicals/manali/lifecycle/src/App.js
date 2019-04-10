import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Component/Button';
class App extends Component {
  constructor(props){
    super();
    this.state={Count:0 }
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
    this.setState({Count:this.state.Count+1})
  }
  handleDecrement=(e)=>{
    this.setState({Count:this.state.Count-1})
  }
  render() {
    console.log("in render")
    return (
      <div >
        <p>Count{this.state.Count}</p>
      
       <Button name="Increment" incrementClick={this.handleIncrement}/>
       <Button name="Decrement" decrementClick={this.handleDecrement}/>
      </div>
    );
  }
}

export default App;
