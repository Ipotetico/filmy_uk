import React, { useState } from 'react';
import './Login.scss';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const Login = ({ setIsLogged }) => {
  const [registered, setRegistered] = useState(true);

  console.log(registered);

  return (
    <>
      {registered ? (
        <SignIn setIsLogged={setIsLogged} setRegistered={setRegistered} />
      ) : (
        <SignUp setIsLogged={setIsLogged} setRegistered={setRegistered} />
      )}
    </>
  );
};

export default Login;
