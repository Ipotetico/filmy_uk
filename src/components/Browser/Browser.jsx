import React, { useState } from 'react';
import Menu from './Menu/Menu';
import Info from './Info/Info';
import MoviesList from './MoviesList/MoviesList';
import Footer from './Footer/Footer';
import MenuHamburg from './Menu/MenuHamburg/MenuHamburg';

import './Browser.scss';
import Login from './Login/Login';

const Browser = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [open, setOpen] = useState(false);

  console.log(isLogged);

  return (
    <div className='browser_container'>
      <Menu open={open} setOpen={setOpen} />
      <Info />
      {isLogged ? <MoviesList /> : <Login setIsLogged={setIsLogged} />}
      <Footer />
      <MenuHamburg open={open} />
    </div>
  );
};

export default Browser;
