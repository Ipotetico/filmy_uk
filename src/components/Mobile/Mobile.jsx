import React, {useState} from 'react';
import MenuMobile from './Menu/MenuMobile';
import MobileTutorial from './MobileTutorial/MobileTutorial';
import CookiesConsentMobile from "./CookiesConsentMobile/CookiesConsentMobile";
import './Mobile.scss';


const Mobile = () => {

  const [cookiesConsent, setCookiesConsent] = useState(false)

  return (
      <>
          <CookiesConsentMobile cookiesConsent={cookiesConsent} setCookiesConsent={setCookiesConsent}/>
    <div className='mobile__container'>
      <MenuMobile />
      <MobileTutorial />
    </div>
      </>
  );
};

export default Mobile;
