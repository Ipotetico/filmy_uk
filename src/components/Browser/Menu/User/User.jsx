import React from 'react';
import './User.scss';

const User = () => {
  return (
    <div className='user'>
      <img src={process.env.PUBLIC_URL + `/images/user.svg`} alt='' />
    </div>
  );
};

export default User;
