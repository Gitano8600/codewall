import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions'

const Menu = ( props ) => {
  console.log('in da Menuprops', props)
  return (
    <StyledMenu open={props.open}>
      {!props.isAuth.uid &&
      <Link to='/signin'>
        Login
      </Link>}
      <Link to='/'>
        Home
      </Link>
      {props.isAuth.uid &&
      <Link to='/'>
        Roadmap
      </Link>}
      <Link to='/'>
        About
      </Link>
      {props.isAuth.uid &&
      <Link to='/' onClick={props.signOut}>
        Logout
      </Link>}
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  const open = ownProps.open
  console.log('in da Menu state', state)
  return {
    isAuth: state.firebase.auth

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);