import React, { useState } from 'react';
import Menu from './Menu/Menu';
import Info from './Info/Info';
import Footer from './Footer/Footer';
import MenuHamburg from './Menu/MenuHamburg/MenuHamburg';
import CookieConsent from "./CookiesConsent/CookiesConsent";

import './Browser.scss';
import Login from './Login/Login';
import ContactUs from "./Login/ContactUs/ContactUs";



const Browser = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [open, setOpen] = useState(false);
  const [cookiesConsent, setCookiesConsent] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  

  return (

    <div className='browser_container'>
        {/*<CookieConsent cookiesConsent={cookiesConsent} setCookiesConsent={setCookiesConsent}/>*/}
      <Menu open={open} setOpen={setOpen} />
      <Info />
      {isLogged ? <ContactUs /> : <Login setIsLogged={setIsLogged} isRegistered={isRegistered} setIsRegistered={setIsRegistered} />}
      <Footer />
      <MenuHamburg open={open} />
    </div>

  );
};

export default Browser;
