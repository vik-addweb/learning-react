import React, { Component } from 'react'

class LifeCycaleC extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: 'Bhavin'
    }
    console.log('LifeCycaleC constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycaleC getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifeCycaleC componentDidMount');
  }
    
  shouldComponentUpdate() {
    console.log('LifeCycaleC shouldComponentUpdate');
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('LifeCycaleC getSnapshotBeforeUpdate');    
    return null
  }

  componentDidUpdate() {
    console.log('LifeCycaleC componentDidUpdate');    
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
