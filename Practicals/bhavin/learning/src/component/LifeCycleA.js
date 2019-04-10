import React, { Component } from 'react'
import LifeCycaleB from './LifeCycleB';
import LifeCycaleC from './LifeCycleC';

class LifeCycaleA extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: 'Bhavin'
    }
    console.log('LifeCycaleA constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycaleA getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifeCycaleA componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('LifeCycaleA shouldComponentUpdate');
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('LifeCycaleA getSnapshotBeforeUpdate');
    return null
  }

  componentDidUpdate() {
    console.log('LifeCycaleA componentDidUpdate');
  }

  changeState = () => {
    this.setState({
      name: 'Tank Bhavin'
    })
  }

  render() {
    console.log('LifeCycaleA render')
    return (
      <div>
        <div>LifeCycaleA Name: {this.state.name}</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycaleB />
        <LifeCycaleC />
      </div>
    )
  }

}

export default LifeCycaleA
