import React from 'react';
import './MobileTutorial.scss';
import texts from '../../data/texts.jsx'

const MobileTutorial = () => {

  return (
    <div className='mobileTutorial__container'>
      <div className='hash'>#{texts.hash}</div>

      <h1 className='title'>{texts.title}</h1>

      <p className='copy'>
          {texts.copy}
      </p>

      <div className='movie'>
        <img src={process.env.PUBLIC_URL + '/images/play.svg'} alt='' />
      </div>
    </div>
  );
};

export default MobileTutorial;
