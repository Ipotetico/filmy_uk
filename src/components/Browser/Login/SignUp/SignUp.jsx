import React from 'react';
import './SignUp.scss';

const SignUp = ({ setRegistered, setIsLogged }) => {
  return (
    <div className='signUp__container'>
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
      <h1>Zarejestruj się</h1>
      <div className='name__container'>
        <input type='text' placeholder='Imię...' />
        <input type='text' placeholder='Nazwisko...' />
      </div>
      <input type='text' placeholder='Instytucja...' />
      <input type='email' placeholder='Podaj email...' />
      <input type='email' placeholder='Powtórz email...' />
      <input type='password' placeholder='Hasło...' />
      <input type='password' placeholder='Powtórz hasło...' />
      <p className='link'>
        Masz juz konto?{' '}
        <span onClick={() => setRegistered(true)}>Zaloguj się tutaj.</span>
      </p>
      <button onClick={() => setIsLogged(true)} className='btn'>
        Zarejestruj się
      </button>
    </div>
  );
};

export default SignUp;
