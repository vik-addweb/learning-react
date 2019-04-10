import React, { Component } from 'react'
import {Button} from 'reactstrap';

export default class Buttons extends Component {
  constructor(props){
    console.log("Child Constructor")
    super(props);

  }
  
  componentWillMount(){
    console.log("Child Component will mount")
  }
  componentDidMount(){
    console.log("Child Component Did mount")
  }
  componentWillUpdate(){
    console.log("Child Component Will Update")
  }
  componentDidUpdate(){
    console.log("Child Component Did Update");
  }
  componentWillUnmount(){
    console.log("Child component will Unmount")
  }
  componentWillReceiveProps(){
    console.log("Child component will Receive Props")
  }
  shouldComponentUpdate(){
    console.log("Child should component update")
    return true;
  }

  render() {
    console.log("Child Render")
    return (
     
    <Button color={this.props.color} onClick={this.props.name==="Increment"? this.props.increment : this.props.decrement} style={{margin:10}} >{this.props.name} </Button>
      
    )
  }
}
