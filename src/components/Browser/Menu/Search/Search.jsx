import React, { useState } from 'react';
import AllMovies from '../AllMovies/AllMovies';
import './Search.scss';

const Search = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='search__container'>
        <div onClick={() => setOpen(!open)} className='all__movies'>
          Wszystkie filmy
          <img
            style={{ transform: open ? 'rotate(-180deg)' : 'rotate(0)' }}
            src={process.env.PUBLIC_URL + '/images/CHEVRON.svg'}
            alt=''
          />
        </div>
        <input className='search__input' type='text' placeholder='Szukaj...' />
        <button className='search__btn'> Search</button>
      </div>
      <AllMovies open={open} />
    </>
  );
};

export default Search;
