import React, { useState } from 'react';
import Menu from './Menu/Menu';
import Info from './Info/Info';
import MoviesList from './MoviesList/MoviesList';
import Footer from './Footer/Footer';

import './Browser.scss';
import Login from './Login/Login';

const Browser = () => {
  const [isLogged, setIsLogged] = useState(false);

  console.log(isLogged);

  return (
    <div className='browser_container'>
      <Menu />
      <Info />
      {isLogged ? <MoviesList /> : <Login setIsLogged={setIsLogged} />}
      <Footer />
    </div>
  );
};

export default Browser;
