import React, { useRef } from 'react';
import { SignUpContainer } from './SignUp.styled';
import { signUp } from '../../store/actions/authActions'
import { connect } from 'react-redux';

const SignUp = (props) => {
    const email = useRef('');
    const password = useRef('');
    const firstName = useRef('');
    const lastName = useRef('');
    const { authError } = props

    const handleSubmit = (event) => {
        event.preventDefault();
        props.signUp({
            firstName: firstName.current.value,
            lastName: lastName.current.value, 
            email: email.current.value, 
            password: password.current.value
        })
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
                    <button>Sign Up</button>
                    {authError && <p>{authError}</p>}
                </div>
            </form>
        </SignUpContainer>
    )

}

const mapStateToProps = (state) =>{
    return  {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);