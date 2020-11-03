import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to='/'>
        Home
      </Link>
      <Link to='/signin'>
        Login
      </Link>
      <Link to='/'>
        Roadmap
      </Link>
      <Link to='/'>
        About
      </Link>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;