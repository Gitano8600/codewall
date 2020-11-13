import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Menu = ( props ) => {
  console.log('in da Menuprops', props)
  return (
    <StyledMenu open={props.open}>
      <Link to='/'>
        Home
      </Link>
      <Link to='/signin'>
        Login
      </Link>
      {props.isAuth &&
      <Link to='/'>
        Roadmap
      </Link>}
      <Link to='/'>
        About
      </Link>
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
    isAuth: !state.firebase.auth.isEmpty

  }
}

export default connect(mapStateToProps)(Menu);