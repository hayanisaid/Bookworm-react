import React, { Component } from 'react';
import propTypes from 'prop-types';
import LoginForm from './loginForm';
class Login extends Component {
    constructor(){
        super();
        this.state={
           
        }
    }
  submit=(data)=>{
      console.log(data)
  }
   
  render() {
       const {data,errors}=this.state;
    return (
        <div>
          <h3>Login Page</h3>
           <LoginForm submit={this.submit}/>
        </div>
       
    );
  }
}
Login.propTypes={
    
}

export default Login;
