import React from 'react';
import './MiddleInfoFrame.scss';

const MiddleInfoFrame = ({ title, subtitle, copy }) => {
  return (
    <div className='middleInfo_Frame__container'>
      <h1 className='title'>{title}</h1>
      <h3 className='subTitle'>{subtitle}</h3>
      <p className='copy'>{copy}</p>
    </div>
  );
};

export default MiddleInfoFrame;
