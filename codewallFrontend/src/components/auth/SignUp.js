import React, { useRef } from 'react';
import { SignUpContainer } from './SignUp.styled';

const SignUp = () => {
    const email = useRef('');
    const password = useRef('');
    const firstName = useRef('');
    const lastName = useRef('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in da submit', firstName.current.value,
        lastName.current.value, 
        email.current.value, 
        password.current.value);
    }
    return (
        <SignUpContainer>
            <form onSubmit={handleSubmit}>
                <h5>Sign In</h5>
                <div>
                    <label htmlFor='firstName'>First name</label>
                    <input type='text' ref={firstName}/>
                </div>
                <div>
                    <label htmlFor='lastName'>Last name</label>
                    <input type='text' ref={lastName}/>
                </div>
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
        </SignUpContainer>
    )

}

export default SignUp;