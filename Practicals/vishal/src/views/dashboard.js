import React, { Component } from 'react';
import ButtonBox from '../component/buttonBox'
export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    console.log('componentDidMount', this.state);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    let { counter } = this.state
    return (
      <div>
        <ButtonBox counter={counter}/>
      </div>
    )
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}
