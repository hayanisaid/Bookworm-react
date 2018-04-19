

import React,{Component} from 'react';
import {Alert}  from 'react-bootstrap';
import PropTypes from 'prop-types';

class InlineError extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <Alert bsStyle="warning">
            <strong>{this.props.message}!</strong> 
          </Alert>
        )
    }
  
}
InlineError.propTypes={
    message:PropTypes.string.isRquired
}
export default InlineError;