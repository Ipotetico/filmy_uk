import React, { useState } from 'react';
import './Login.scss';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const Login = ({ setIsLogged, isRegistered, setIsRegistered }) => {


  return (
    <>
      {isRegistered ? (
        <SignIn setIsLogged={setIsLogged} isRegistered={isRegistered} setIsRegistered={setIsRegistered} />
      ) : (
        <SignUp setIsLogged={setIsLogged} isRegistered={isRegistered} setIsRegistered={setIsRegistered} />
      )}
    </>
  );
};

export default Login;
