import React from 'react';
import './MenuHamburg.scss';

const MenuHamburg = ({ open }) => {
  return <div className={open ? 'menuHamburg' : 'menuHamburg open'}></div>;
};

export default MenuHamburg;
