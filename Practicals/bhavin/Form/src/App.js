import React, { Component } from 'react'
import SimpleForm from './components/SimpleForm'
import ComplexForm from './components/ComplexForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleForm />
        <ComplexForm />
      </div>
    )
  }
}

export default App
