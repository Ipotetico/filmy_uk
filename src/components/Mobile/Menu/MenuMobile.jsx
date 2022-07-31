import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import './MenuMobile.scss';

const MenuMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HamburgerMenu open={open} />
      <div className='menuMobile__container'>
        <img
          className='logo'
          src={process.env.PUBLIC_URL + '/images/KORE.svg'}
          alt=''
        />
        <img
          className='logo'
          src={process.env.PUBLIC_URL + '/images/HTP.svg'}
          alt=''
        />
        <img
          className='logo'
          src={process.env.PUBLIC_URL + '/images/MAX.svg'}
          alt=''
        />
        <img
          onClick={() => setOpen(!open)}
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
          className='more'
          src={process.env.PUBLIC_URL + '/images/MORE.svg'}
          alt=''
        />
      </div>
    </>
  );
};

export default MenuMobile;
