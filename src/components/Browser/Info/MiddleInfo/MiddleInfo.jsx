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
      {/*<MiddleInfoFrame*/}
      {/*  title={texts.frameTwo.title}*/}
      {/*  subtitle={texts.frameTwo.subtitle}*/}
      {/*  copy={texts.frameTwo.copy}*/}
      {/*/>*/}
    </div>
  );
};

export default MiddleInfo;
