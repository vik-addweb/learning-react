import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

function Inputs(props) {
  
  const { classes } = props;
  return (
    
         
      <Input
        type={props.type}
        value={props.value}
        onChange={props.handlechange}
        
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />

      

      
    
  );
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);
