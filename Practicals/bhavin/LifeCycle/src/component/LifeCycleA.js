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

  componentWillMount() {
    console.log('LifeCycaleA componentWillMount')
  }

  componentDidMount() {
    console.log('LifeCycaleA componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('LifeCycaleA componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('LifeCycaleA shouldComponentUpdate');
    return true
  }

  componentWillUpdate() {
    console.log('LifeCycaleA componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('LifeCycaleA componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('LifeCycaleA componentWillUnmount');    
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
