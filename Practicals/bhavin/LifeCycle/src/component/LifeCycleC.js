import React, { Component } from 'react'

class LifeCycaleC extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: 'Bhavin'
    }
    console.log('LifeCycaleC constructor')
  }

  componentWillMount() {
    console.log('LifeCycaleC componentWillMount')
  }

  componentDidMount() {
    console.log('LifeCycaleC componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('LifeCycaleC componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('LifeCycaleC shouldComponentUpdate');
    return true
  }

  componentWillUpdate() {
    console.log('LifeCycaleC componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('LifeCycaleC componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('LifeCycaleC componentWillUnmount');    
  }
    
  changeState = () => {
    this.setState({
      name: 'Tank Bhavin'
    })
  }

  render() {
    console.log('LifeCycaleC render')        
    return (
      <div>
        <div>LifeCycaleC Name: {this.state.name}</div>
        <button onClick={this.changeState}>Change State</button>
      </div>
    )
  }

}

export default LifeCycaleC
