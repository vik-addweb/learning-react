import React from "react";
import PropTypes from "prop-types";

import Dropdown from 'react-dropdown'


function SelectBox({ ...props }) {
    const {
        options,
        onChangeText,
        value,
    } = props;
    return (
        <Dropdown options={options} onChange={onChangeText} value={value}  />
    )
}
const styles = {
}
SelectBox.propTypes = {
    options: PropTypes.array,
    value: PropTypes.string,
    onChange: PropTypes.func
}
export default SelectBox;