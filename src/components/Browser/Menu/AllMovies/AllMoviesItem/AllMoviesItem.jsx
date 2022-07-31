import React from 'react';
import './AllMoviesItem.scss';

const AllMoviesItem = ({ title, setOpen }) => {
  const handleClick = () => {
    setOpen(false);
  };
  return (
    <div className='allMoviesItem__container'>
      <h1 onClick={handleClick}>{title}</h1>
    </div>
  );
};

export default AllMoviesItem;
