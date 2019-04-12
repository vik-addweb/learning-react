import React, { Component } from 'react'
import Input from './Input';

class SimoleForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: undefined,
            email: undefined,
            phone: undefined,
            topic: undefined,
            gander: undefined,
            comments: undefined,
            error: {
                name: undefined,
                email: undefined,
                phone: undefined,
                topic: undefined,
                gander: undefined,
                comments: undefined
            }
        }
    }

    changeName = event => {
        this.setState({
            name: event.target.value
        })
    }

    changeEmail = event => {
        this.setState({
            email: event.target.value
        })
    }

    changePhone = event => {
        this.setState({
            phone: event.target.value
        })
    }

    changeTopic = event => {
        this.setState({
            topic: event.target.value
        })
    }

    changeGander = event => {
        this.setState({
            gander: event.target.value
        })
    }

    changeComment = event => {
        this.setState({
            comments: event.target.value
        })
    }

    formSubmit = event => {
        event.preventDefault()
        let submit = true
        const error = {
            name: undefined,
            email: undefined,
            phone: undefined,
            topic: undefined,
            gander: undefined,
            comments: undefined
        };
        if (`${this.state.name}` === 'undefined') {
            error.name = 'Name filed is required'
            submit = false
        }
        if (`${this.state.email}` === 'undefined') {
            error.email = 'Email filed is required'
            submit = false
        }
        if (`${this.state.phone}` === 'undefined') {
            error.phone = 'Phone number filed number is required'
            submit = false
        }
        if (`${this.state.topic}` === 'undefined') {
            error.topic = 'Topic filed number is required'
            submit = false
        }
        if (`${this.state.gander}` === 'undefined') {
            error.gander = 'Gander filed number is required'
            submit = false
        }
        if (`${this.state.comments}` === 'undefined') {
            error.comments = 'Comment filed number is required'
            submit = false
        }
        this.setState({
            error: error
        })
        if (submit) {
          alert(`${JSON.stringify(this.state)}`)
        }
    }

    render() {
        return (
            <center>
                <h1>Simple Form</h1>
                <form onSubmit={this.formSubmit}>
                    <div style={{ margin: '15px 0px' }}>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={this.state.name || ''}
                            onChange={this.changeName} />
                        <div style={{ color: 'red' }}>{this.state.error.name}</div>
                    </div>

                    <div style={{ margin: '15px 0px' }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={this.state.email || ''}
                            onChange={this.changeEmail} />
                        <div style={{ color: 'red' }}>{this.state.error.email}</div>
                    </div>

                    <div style={{ margin: '15px 0px' }}>
                        <input
                            type="number"
                            placeholder="Enter your phone number"
                            value={this.state.phone || ''}
                            onChange={this.changePhone} />
                        <div style={{ color: 'red' }}>{this.state.error.phone}</div>
                    </div>

                    <div style={{ margin: '15px 0px' }}>
                        <select value={this.state.topic} onChange={this.changeTopic}>
                            <option value="">Select any one topic</option>
                            <option value="React">React</option>
                            <option value="Vuejs">Vue.js</option>
                            <option value="Angular">Angular</option>
                        </select>
                        <div style={{ color: 'red' }}>{this.state.error.topic}</div>
                    </div>

                    <div style={{ margin: '15px 0px' }}>
                        <input
                            type="radio"
                            value="Male"
                            checked={this.state.gander === 'Male'}
                            onChange={this.changeGander} />Male
                        <input
                            type="radio"
                            value="Female"
                            checked={this.state.gander === 'Female'}
                            onChange={this.changeGander} />Female
                        <div style={{ color: 'red' }}>{this.state.error.gander}</div>
                    </div>

                    <div style={{ margin: '15px 0px' }}>
                        <textarea
                            onChange={this.changeComment}>
                            {this.state.comments || ''}
                        </textarea>
                        <div style={{ color: 'red' }}>{this.state.error.comments}</div>
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </center>
        )
    }
}

export default SimoleForm