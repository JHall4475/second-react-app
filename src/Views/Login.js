import React, { Component } from 'react';
import '../Views/login.css';
import {authenticateUser} from '../data/api';



class Login extends Component{
    state={
        email:'',
        password:''
    }

    handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        this.setState({ [key]: value })
    }

    handleClick = (event) => {
        authenticateUser(this.state.email, this.state.password)
        .then( (userId) => {
            return this.props.history.push(`/profile/${userId}`)
        })
        .catch((error) => {
            alert(`not authenticated: ${error}`);
        })
    
    }


    render(){
        return(
            <div className="login-wrapper"> 
            <h1>Welcome to the Open Movie Database</h1>
            <div className="">Please sign in to create a favorite movies list</div>
            <br></br>
            <input name='email' value={this.state.email} onChange={this.handleChange} placeholder="Email" />
            <input name='password' value={this.state.password} onChange={this.handleChange}placeholder="Password" type="password"/>
            <div className="login-submit" onClick={this.handleClick} > Sign In </div>
            </div>
        
        )
    }
}

export default Login;