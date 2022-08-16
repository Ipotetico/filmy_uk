import React from 'react';
import MiddleInfoFrame from './MiddleInfoFrame/MiddleInfoFrame';
import texts from  '../../../data/texts';

import './MiddleInfo.scss';

const MiddleInfo = () => {
  return (
    <div className='middleInfo__container'>
      <MiddleInfoFrame
        title={texts.frameOne.title}
        subtitle={texts.frameOne.subtitle}
        copy={texts.frameOne.copy}
      />
    </div>
  );
};

export default MiddleInfo;
