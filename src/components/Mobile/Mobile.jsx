import React from 'react';
import MenuMobile from './Menu/MenuMobile';
import MobileTutorial from './MobileTutorial/MobileTutorial';

import './Mobile.scss';

const Mobile = () => {
  return (
    <div className='mobile__container'>
      <MenuMobile />
      <MobileTutorial />
    </div>
  );
};

export default Mobile;
