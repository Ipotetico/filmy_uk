import React, { useState } from 'react';
import './Tutorial.scss';
import TutorialMovie from './TutorialMovie/TutorialMovie';

const Tutorial = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TutorialMovie open={open} setOpen={setOpen} />
      <div className='tutorial__container'>
        <h1 className='hash'>#instrukcja</h1>
        <h1 className='title'>Instrukcja rejestracji</h1>
        <div className='container__half'>
          <div className='texts__container'>
            <p className='copy'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              voluptas vitae debitis dolor nam deserunt porro accusantium error
              provident. Impedit ratione nesciunt similique. Quo repellat
              placeat sequi! Maxime, nisi iste.
            </p>
            <h3 onClick={() => setOpen(true)} className='gotoMovie'>
              Przejdź do filmu
              <img
                src={process.env.PUBLIC_URL + '/images/strzalkaFilm.svg'}
                alt=''
              />
            </h3>
          </div>
          <div className='movie__container'>
            <img
              onClick={() => setOpen(true)}
              src={process.env.PUBLIC_URL + '/images/play.svg'}
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tutorial;
