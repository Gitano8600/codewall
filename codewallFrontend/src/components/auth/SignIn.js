import React, { useRef } from 'react';
import { SignInContainer } from './SignIn.styled';

const SignIn = () => {
    const email = useRef('');
    const password = useRef('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in da submit', email.current.value, password.current.value);
    }
    return (
        <SignInContainer>
            <form onSubmit={handleSubmit}>
                <h5>Sign In</h5>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' ref={email}/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' ref={password}/>
                </div>
                <div>
                    <button>Sign In</button>
                </div>
            </form>
        </SignInContainer>
    )

}

export default SignIn;