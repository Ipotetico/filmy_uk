import React, { useState } from 'react';
import './Tutorial.scss';
import TutorialMovie from './TutorialMovie/TutorialMovie';
import texts from "../../../data/texts";

const Tutorial = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TutorialMovie open={open} setOpen={setOpen} />
      <div className='tutorial__container'>
        <h1 className='hash'>#{texts.tutorial.hash}</h1>
        <h1 className='title'>{texts.tutorial.title}</h1>
        <div className='container__half'>
          <div className='texts__container'>
            <p className='copy'>
              {texts.tutorial.copy}
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
