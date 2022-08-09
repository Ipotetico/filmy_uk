import React, { useState } from 'react';
import Menu from './Menu/Menu';
import Info from './Info/Info';
import MoviesList from './MoviesList/MoviesList';
import Footer from './Footer/Footer';
import MenuHamburg from './Menu/MenuHamburg/MenuHamburg';
import CookieConsent from "./CookiesConsent/CookiesConsent";

import './Browser.scss';
import Login from './Login/Login';



const Browser = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [open, setOpen] = useState(false);
  const [cookiesConsent, setCookiesConsent] = useState(false)
  

  return (

    <div className='browser_container'>
        {/*<CookieConsent cookiesConsent={cookiesConsent} setCookiesConsent={setCookiesConsent}/>*/}
      <Menu open={open} setOpen={setOpen} />
      <Info />
      {isLogged ? <MoviesList /> : <Login setIsLogged={setIsLogged} />}
      <Footer />
      <MenuHamburg open={open} />
    </div>

  );
};

export default Browser;
