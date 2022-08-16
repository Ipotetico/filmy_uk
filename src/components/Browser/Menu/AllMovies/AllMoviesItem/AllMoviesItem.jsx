import React from 'react';
import './AllMoviesItem.scss';

const AllMoviesItem = ({ title, setOpen, zip }) => {

  return (
    <div onClick={() =>setOpen(false)} className='allMoviesItem__container'>
      <a className='download' href={zip}>{title}</a>
    </div>
  );
};

export default AllMoviesItem;
