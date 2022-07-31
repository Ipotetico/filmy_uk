import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './HamburgerMenu.scss';

const HamburgerMenu = ({ open }) => {
  return (
    <div
      className={
        open ? 'hamburgerMenu__container' : 'hamburgerMenu__container open'
      }>
      <MenuItem title='Lorem' />
      <MenuItem title='Ipsum' />
      <MenuItem title='Dolor' />
      <MenuItem title='Sic Amet' />
    </div>
  );
};

export default HamburgerMenu;
