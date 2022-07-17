import React from 'react';
import './Info.scss';
import MiddleInfo from './MiddleInfo/MiddleInfo';
import Settings from './Settings/Settings';
import Tutorial from './Tutorial/Tutorial';

const Info = () => {
  return (
    <div className='info__container'>
      <Tutorial />
      <MiddleInfo />
      <Settings />
    </div>
  );
};

export default Info;
