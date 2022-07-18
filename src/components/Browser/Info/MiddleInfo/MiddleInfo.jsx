import React from 'react';
import MiddleInfoFrame from './MiddleInfoFrame/MiddleInfoFrame';

import './MiddleInfo.scss';

const MiddleInfo = () => {
  return (
    <div className='middleInfo__container'>
      <MiddleInfoFrame
        title='Lorem ipsum'
        subtitle='Ut ac feugiat neque.'
        copy='
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
      />
      <MiddleInfoFrame
        title='Dolor sic amet'
        subtitle='Ut ac feugiat neque.'
        copy='
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
      />
    </div>
  );
};

export default MiddleInfo;
