import React, { useState } from 'react';
import './MovieWindow.scss';

const MovieWindow = ({
  hash,
  title,
  opis,
  classNameProp,
  setClassNameProp,
}) => {
  return (
    <div className='movieWindow__container'>
      <img src={process.env.PUBLIC_URL + '/images/zaslepki/01.webp'} alt='' />
      <div className={classNameProp ? 'opis open' : 'opis'}>
        <h1 className='hash'>#{hash}</h1>
        <div className='title__container'>
          <img
            style={
              classNameProp
                ? { transform: 'rotate(45deg)' }
                : { transform: 'rotate(0deg)' }
            }
            onClick={() => setClassNameProp(!classNameProp)}
            className='more'
            src={process.env.PUBLIC_URL + '/images/MORE.svg'}
            alt=''
          />
          <h1 className='title'>{title}</h1>
          <img
            className='download'
            src={process.env.PUBLIC_URL + '/images/download.svg'}
            alt=''
          />
        </div>
        <p>{opis}</p>
      </div>
    </div>
  );
};

export default MovieWindow;
