import React from 'react';
import './TutorialMovie.scss';

const TutorialMovie = ({ open, setOpen }) => {
  return (
    <div
      className={
        open ? 'tutorialMovie__container open' : 'tutorialMovie__container'
      }>
      <h1 onClick={() => setOpen(!open)} className='close'>
        CLOSE
      </h1>
      <video
        controls
        autoPlay
        src='https://video-previews.elements.envatousercontent.com/h264-video-previews/6c741d3a-a9e2-4798-aad0-3e9c7d3e81e0/14135366.mp4'></video>
    </div>
  );
};

export default TutorialMovie;
