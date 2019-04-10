import React, { Component } from "react";
import PropTypes from "prop-types";

import Dropdown from 'react-dropdown'

class ButtonBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }
    increment() {
        let { counter } = this.state;
        console.log(counter);
    }
    decriment() {
        let { counter } = this.state;
        console.log(counter);
    }
    render() {
        let { counter } = this.props;
        return (
            <div>
                <button onClick={this.increment} value={counter}>{'Add Counter'}</button>
                <button onClick={this.decriment} value={counter}>{'Remove Counter'}</button>
            </div>
        )
    }
}
const styles = {
}
ButtonBox.propTypes = {
    value: PropTypes.number,
    onClick: PropTypes.func,
    name: PropTypes.string
}
export default ButtonBox;