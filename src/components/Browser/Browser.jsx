import React from 'react';
import Menu from './Menu/Menu';

import './Browser.scss';
import Info from './Info/Info';
import MoviesList from './MoviesList/MoviesList';

const Browser = () => {
  return (
    <div className='browser_container'>
      <Menu />
      <Info />
      <MoviesList />
    </div>
  );
};

export default Browser;
