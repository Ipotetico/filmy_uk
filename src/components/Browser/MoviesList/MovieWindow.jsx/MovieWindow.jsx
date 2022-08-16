import React, { useState, useRef } from 'react';
import './MovieWindow.scss';

const MovieWindow = ({id, hash, title, opis, length, weight,poster, address,zip }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  const handlePlayVideo = () => {
    ref.current.play();
  };
  const handlePauseVideo = () => {
    ref.current.pause();
  };
  

  return (
    <div key={id} className='movieWindow__container'>
      <video
          poster={poster}
          preload='auto'
          type='video/mp4'
          ref={ref}
          onMouseEnter={handlePlayVideo}
          onMouseLeave={handlePauseVideo}
          muted
          src={address}></video>
      <div className={open ? 'opis open' : 'opis'}>
        <h1 className='hash'>#{hash}</h1>
        <div className='title__container'>
          <img
            style={
              open
                ? { transform: 'rotate(45deg)' }
                : { transform: 'rotate(0deg)' }
            }
            onClick={() => setOpen(!open)}
            className='more'
            src={process.env.PUBLIC_URL + '/images/MORE.svg'}
            alt=''
          />
          <h1 className='title'>{title}</h1>
          <a className='download' href={zip} download>
          <img
            src={process.env.PUBLIC_URL + '/images/download.svg'}
            alt='download'
          />
          </a>
        </div>
        <p>{opis}</p>
        <p className='data'>
          długość:
          <span>{length}</span>
        </p>
        <p className='data'>
          wielkość:
          <span>{weight}</span>
        </p>
      </div>
    </div>
  );
};

export default MovieWindow;
