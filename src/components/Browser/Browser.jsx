import React from 'react';
import Menu from './Menu/Menu';
import Info from './Info/Info';
import MoviesList from './MoviesList/MoviesList';
import Footer from './Footer/Footer';

import './Browser.scss';

const Browser = () => {
  return (
    <div className='browser_container'>
      <Menu />
      <Info />
      <MoviesList />
      <Footer />
    </div>
  );
};

export default Browser;
