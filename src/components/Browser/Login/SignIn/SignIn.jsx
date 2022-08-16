import React from 'react';
import './SignIn.scss';

const SignIn = ({ setIsLogged,isRegistered, setIsRegistered }) => {
  return (
    <div className='login__container'>
      <img
        src={process.env.PUBLIC_URL + '/images/fala.svg'}
        alt=''
        className='fala'
      />
      <img
        src={process.env.PUBLIC_URL + '/images/ukry.svg'}
        alt=''
        className='ukry'
      />
      <h1>Zaloguj się</h1>
      <input type='email' placeholder='Podaj email...' />
      <input type='password' placeholder='Hasło...' />
      <p className='link'>
        Nie masz konta?{' '}
        <span onClick={() => setIsRegistered(false)}>Utwórz je tutaj.</span>
      </p>
      <button onClick={() => setIsLogged(true)} className='btn'>
        Zaloguj się
      </button>
    </div>
  );
};

export default SignIn;
