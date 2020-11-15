import React, { useRef } from 'react';
import { SignInContainer } from './SignIn.styled';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

const SignIn = (props) => {
    const email = useRef('');
    const password = useRef('');
    const { authError } = props

    const handleSubmit = (event) => {
        event.preventDefault();
        props.signIn({
            email: email.current.value,
            password: password.current.value
        })
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
                    {authError && <p>{authError}</p>}
                </div>
            </form>
        </SignInContainer>
    )
    
}

const mapStateToProps = (state) => {
    console.log('in da signinstate', state);
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);