import React, { useState, useRef } from 'react';
import Burger from './Burger'
import Menu from './Menu'
import { useOnClickOutside } from '../../utils/hooks';

const MenuComponent = () => {
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));
    const [open, setOpen] = useState(false);
    return (
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    )
  }
  
  export default MenuComponent;