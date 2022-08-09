import React, {useRef, useState} from 'react';
import './SignUp.scss';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import LicenceConsent
    from "./LicenceConsent/LicenceConsent";
// import {useAuth} from "../../../Contexts/AuthContext";

const SignUp = ({ setRegistered, setIsLogged }) => {
    
    const [phoneNumber, setPhoneNumber] = useState()
    const [licence, setLicence] = useState(false)
    

    
    const emailRef = useRef()
    const emailConfirmationRef = useRef()
    const nameRef = useRef()
    const surnameRef = useRef()
    const institutionRef = useRef()
    const phoneNumberRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    // const {signup} = useAuth()
    
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //
    //     signup(emailRef.current.value, passwordRef.current.value)
    // }
    
    const handleSubmit = () => {
        if (licence) {
            setIsLogged(true)
        }
    }
    
  return (
    <form className='signUp__container'>
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
        <input ref={nameRef} type='text' placeholder='Imię...' />
        <input ref={surnameRef} type='text' placeholder='Nazwisko...' />
      </div>
      <input ref={institutionRef} type='text' placeholder='Instytucja...' />
        <PhoneInput style={{width:'35%'}} placeholder="Telefon..." country="PL"  value={phoneNumber} onChange={setPhoneNumber}/>
      <input ref={emailRef} type='email' placeholder='Podaj email...' required/>
      <input ref={emailConfirmationRef} type='email' placeholder='Powtórz email...' />
      <input ref={passwordRef} type='password' placeholder='Hasło...' />
      <input ref={passwordConfirmationRef} type='password' placeholder='Powtórz hasło...' />
        <LicenceConsent licence={licence} setLicence={setLicence}/>
      <p className='link'>
        Masz juz konto?{' '}
        <span onClick={() => setRegistered(true)}>Zaloguj się tutaj.</span>
      </p>
      <button onClick={handleSubmit} className={licence ? 'btn' +
          ' active' :'btn' } type='submit' >
        Zarejestruj się
      </button>
    </form>

  );
};

export default SignUp;
