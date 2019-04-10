import React, { Component } from 'react'

class LifeCycaleB extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: 'Bhavin'
    }
    console.log('LifeCycaleB constructor')
  }

  componentWillMount() {
    console.log('LifeCycaleB componentWillMount')
  }

  componentDidMount() {
    console.log('LifeCycaleB componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('LifeCycaleB componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('LifeCycaleB shouldComponentUpdate');
    return true
  }

  componentWillUpdate() {
    console.log('LifeCycaleB componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('LifeCycaleB componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('LifeCycaleB componentWillUnmount');    
  }
    
  changeState = () => {
    this.setState({
      name: 'Tank Bhavin'
    })
  }

  render() {
    console.log('LifeCycaleB render')        
    return (
      <div>
        <div>LifeCycaleB Name: {this.state.name}</div>
        <button onClick={this.changeState}>Change State</button>
      </div>
    )
  }

}

export default LifeCycaleB
