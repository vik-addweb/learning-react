import React, { Component } from 'react'

class LifeCycaleB extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: 'Bhavin'
    }
    console.log('LifeCycaleB constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycaleB getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifeCycaleB componentDidMount');
  }
    
  shouldComponentUpdate() {
    console.log('LifeCycaleB shouldComponentUpdate');
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('LifeCycaleB getSnapshotBeforeUpdate');    
    return null
  }

  componentDidUpdate() {
    console.log('LifeCycaleB componentDidUpdate');    
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
