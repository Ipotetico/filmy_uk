import React from 'react';
import './MenuItem.scss';

const MenuItem = ({ title }) => {
  return (
    <div className='menuItem__container'>
      <h1>{title}</h1>
    </div>
  );
};

export default MenuItem;
