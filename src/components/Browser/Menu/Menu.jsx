import React from 'react';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import User from './User/User';
import Hamburg from './Hamburg/Hamburg';

import './Menu.scss';

const Menu = ({ open, setOpen }) => {
  return (
    <>
      <div className='menu__container'>
        <Logo logo='Kore' address='agencjakore.pl' />
        <Logo logo='HTP' address='hightidepictures.eu' />
        <Logo logo='MAX' address='' />
        <Search />
        <User />
        <Hamburg open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Menu;
