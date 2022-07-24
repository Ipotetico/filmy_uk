import React from 'react';
import './AllMoviesItem.scss';

const AllMoviesItem = ({ title }) => {
  return (
    <div className='allMoviesItem__container'>
      <h1>{title}</h1>
    </div>
  );
};

export default AllMoviesItem;
