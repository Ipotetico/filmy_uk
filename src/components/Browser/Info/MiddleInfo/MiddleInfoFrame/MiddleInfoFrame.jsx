import React from 'react';
import './MiddleInfoFrame.scss';

const MiddleInfoFrame = ({ title, subtitle, copy }) => {
  return (
    <div className='middleInfo_Frame__container'>
        <div className="titles">
      <h1 className='title'>{title}</h1>
      <h3 className='subTitle'>{subtitle}</h3>
        </div>
      <p className='copy'>{copy}</p>
        {/*<img src={process.env.PUBLIC_URL + '/images/fala.svg'} alt=""/>*/}
    </div>
  );
};

export default MiddleInfoFrame;
