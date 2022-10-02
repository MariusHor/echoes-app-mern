import React from 'react';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href='/'>
        <img className='navbar__logo' src={images.logo} alt='echoes logo' />
      </a>
    </nav>
  );
};

export default Navbar;
