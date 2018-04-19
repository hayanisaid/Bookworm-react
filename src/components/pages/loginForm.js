import React, { Component } from 'react';
import {FormControl,FormGroup,ControlLabel,Button,HelpBlock} from 'react-bootstrap';
import validator from 'validator';
import propTypes from 'prop-types';
import InlineError from '../messages/inlineError';
class LoginForm extends Component {
    constructor(){
        super();
        this.state={
            data:{
                email:'',
                password:''
            },
            loading:false,
            errors:[]
        }
    }
   
    handleChange=(e)=>{
        this.setState({
            data:{...this.state.data,[e.target.name]:e.target.value}})
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const errors=this.validate(this.state.data);
        this.setState({errors})
        if(Object.keys(errors).length===0){
            this.props.submit(this.state.data)
        }
    }
    validate=(data)=>{
        const erros={};
        if(!validator.isEmail(data.email))erros.email='invalid email';
        if(!data.password)erros.password="password is required";
        return erros;
    }
  render() {
       const {data,errors}=this.state;
    return (
       <form onSubmit={this.onSubmit}>
         <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="text"
            value={this.state.data.email}
            name="email"
            placeholder="Enter email"
            onChange={this.handleChange.bind(this)}
          />
         
           <ControlLabel>Passowrd</ControlLabel>
          <FormControl
            type="password"
            name="password"
            value={this.state.data.password}
            placeholder="Enter Pass**"
            onChange={this.handleChange.bind(this)}
          />
          <FormControl.Feedback />
          <HelpBlock>
          {errors.email && <InlineError message={errors.email}/>}
          {errors.password && <InlineError message={errors.password}/>}
          </HelpBlock>
        </FormGroup>
        <Button type="submit">Submit</Button>
       </form>
    );
  }
}
LoginForm.propTypes={
    submit:propTypes.func.isRequired 
}

export default LoginForm;
