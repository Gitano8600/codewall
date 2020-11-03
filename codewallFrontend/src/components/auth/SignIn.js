import React from 'react';
import { SignInContainer } from './SignIn.styled';

const SignIn = () => {
    const handleChange = (event) => {
        console.log(event);
    }
    const handleSubmit = (event) => {
        console.log(event);
    }
    return (
        <SignInContainer>
            <form onSubmit={handleSubmit}>
                <h5>Sign In</h5>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' onChange={handleChange}/>
                </div>
                <div>
                    <button>Sign In</button>
                </div>
            </form>
        </SignInContainer>
    )

}

export default SignIn;