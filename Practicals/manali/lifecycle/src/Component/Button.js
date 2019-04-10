import React, { Component } from 'react';


class App extends Component {
    constructor(props){
        super();
        this.state={counter:''}
    }
    componentWillMount(){
      console.log("Component will mount in button")
    }
    componentDidMount(){
      console.log("Component Did mount in button")
    }
    componentWillUpdate(){
      console.log("Component Will Update in button")
    }
    componentDidUpdate(){
      console.log("Component Did Update in button");
    }
    componentWillUnmount(){
      console.log("Component will Unmount in button")
    }
    componentWillReceiveProps(){
      console.log("Component Will Receive Props in button");
    }
    shouldComponentUpdate(){
      console.log("Should Component Update in button")
    }
  render() {
    return (
      <div >
          <button type="submit" onClick={this.props.name === 'Increment'?this.props.incrementClick : this.props.decrementClick}>{this.props.name}</button>
      </div>
    );
  }
}

export default App;