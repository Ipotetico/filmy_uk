import React from 'react';
import './MobileTutorial.scss';

const MobileTutorial = () => {
  return (
    <div className='mobileTutorial__container'>
      <div className='hash'>#instrukcja</div>

      <h1 className='title'>Instrukcja rejestracji</h1>

      <p className='copy'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque sint
        blanditiis cupiditate quod quis. Amet distinctio perspiciatis vel
        delectus rem, non reprehenderit obcaecati repellat quae autem omnis
        tempore illum quia vero consectetur, animi ipsam dolores iusto. Nostrum
        porro distinctio nobis ducimus vel laudantium adipisci ut laboriosam.
        Iste sed facilis laudantium!
      </p>

      <div className='movie'>
        <img src={process.env.PUBLIC_URL + '/images/PLAY.svg'} alt='' />
      </div>
    </div>
  );
};

export default MobileTutorial;
