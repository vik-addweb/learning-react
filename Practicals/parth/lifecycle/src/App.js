import React, { Component } from 'react';
import './App.css';
import Buttons from './component/Buttons';

class App extends Component {
  constructor(props){
    console.log("Parent Constructor")
    super(props);
    this.state={
      count:0,
    }
  }

  componentWillMount(){
    console.log("Parent Component will mount")
  }
  componentDidMount(){
    console.log("Parent Component Did mount")
  }
  componentWillUpdate(){
    console.log("Parent Component Will Update")
  }
  componentDidUpdate(){
    console.log("Parent Component Did Update");
  }
  componentWillUnmount(){
    console.log("Parent component will Unmount")
  }
  shouldComponentUpdate(){
    console.log("Parent should component update")
    return true;
  }

  Increment=()=>{
     this.setState({
       count:this.state.count+1
      })
  }
  Decrement=()=>{
    this.setState({
      count:this.state.count-1
    })
  }

  render() {
    console.log("Parent Render")
    return (
      <div className="App" style={{margin:20}}>
       <h2>{this.state.count}</h2>  
       <div className="row">
       <div className="col-sm-12">
       <Buttons color="success" name="Increment" increment={this.Increment} /> 
       <Buttons color="warning" name="Decrement" decrement={this.Decrement} />
       </div>
       </div>
      </div>
    );
  }
}

export default App;
