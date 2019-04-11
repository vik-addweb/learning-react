import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';


const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

class RadioButtons extends React.Component {
 

  // handleChange = event => {
  //   this.setState({ selectedValue: event.target.value });
  // };

  render() {
    const { checked } = this.props;

    return (
      <Fragment>
        {this.props.value}
        <Radio
          checked={checked}
          onChange={this.props.handlechange}
          value={this.props.value}
          name={this.props.name}
          aria-label="A"
        />
        
        
      </Fragment>
    );
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtons);