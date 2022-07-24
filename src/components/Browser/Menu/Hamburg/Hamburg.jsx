import React from 'react';
import './Hamburg.scss';

const Hamburg = ({ open, setOpen }) => {
  return (
    <>
      <div className={open ? 'hamburg open' : 'hamburg'}>
        <img
          onClick={() => setOpen(!open)}
          src={process.env.PUBLIC_URL + '/images/MORE.svg'}
          alt=''
        />
      </div>
    </>
  );
};

export default Hamburg;
