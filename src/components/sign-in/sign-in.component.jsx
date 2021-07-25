import React from 'react';

import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../cutom-button/custom-button.component";

import {signInWithGoogle} from "../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:'',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password:''})
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]:value})
        // name will be whatever that value that comes it will be, if it is password then it will show as password, value will be the really value
    };

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have the account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required/>
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required/>
                        <div className='button'>
                            <CustomButton type='submit' > SIGN IN</CustomButton>
                            {/*input and button both have the type submit, so they both work since the onSubmit function been called*/}
                            <CustomButton onClick = {signInWithGoogle} isGoogleSignIn> SIGN IN WITH GOOGLE</CustomButton>
                        </div>

                </form>
            </div>
        );
    }

}

export default SignIn