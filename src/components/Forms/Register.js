import React, { Component } from 'react';
import fire from '../../config/Fire';
import './Login.css';

class Register extends Component{
    state = {
        email: '',
        password: '',
        displayName: '',
        fireErrors: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            var currentUser = fire.auth().currentUser;
            currentUser.updateProfile({
                displayName: this.state.displayName
            })
        }).catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }
    

    render(){
        let errorNotification = this.state.fireErrors ? (<div className="Error">{this.state.fireErrors}</div>): null;
        return (
            <>
                {errorNotification}
                <form>
                    <input type="text" onChange = {this.handleChange} value={this.state.displayName} className="regField" placeholder="Your Name" name="displayName" />
                    <input type="email" onChange = {this.handleChange} value={this.state.email} className="regField" placeholder="Email" name="email" />
                    <input type="password" onChange = {this.handleChange} value={this.state.password} className="regField" placeholder="Password" name="password" />
                    <input onClick={this.register} type="submit" className="submitBtn" value="REGISTER" />
                </form>
            </>
        )
    }
}

export default Register;