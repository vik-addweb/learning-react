import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

function NativeSelects (props){
  const { classes } = props;
    return (
        
        <FormControl className={classes.formControl}>
          <NativeSelect
            value={props.value}
            onChange={props.handlechange}
            name={props.name}
            className=""
            style = {{width:300}}
          >
            <option value="" disabled>Course</option>
            <option value={'react'}>React</option>
            <option value={'angular'}>Angular</option>
           
          </NativeSelect>
         
        </FormControl>
       
     
    );
  
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);
