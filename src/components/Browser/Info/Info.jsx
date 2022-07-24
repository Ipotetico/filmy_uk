import React from 'react';
import MiddleInfo from './MiddleInfo/MiddleInfo';
import Settings from './Settings/Settings';
import Tutorial from './Tutorial/Tutorial';

import './Info.scss';

const Info = () => {
  return (
    <div className='info__container'>
      <Tutorial />
      <div className='info__container__right'>
        <MiddleInfo />
        <Settings />
      </div>
    </div>
  );
};

export default Info;
