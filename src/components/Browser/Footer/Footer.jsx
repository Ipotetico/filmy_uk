import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='faq'>
        <h3 className='title'>faq</h3>
        <h3 className='footer__item'>licencja</h3>
        <h3 className='footer__item'>pobieranie</h3>
        <h3 className='footer__item'>rejestracja</h3>
      </div>

      <div className='faq'>
        <h3 className='title'>help</h3>
        <h3 className='footer__item'>licencja</h3>
        <h3 className='footer__item'>pobieranie</h3>
        <h3 className='footer__item'>rejestracja</h3>
      </div>

      <div className='copyright'>
        Copyright ©{' '}
        <img src={process.env.PUBLIC_URL + '/images/Kore.svg'} alt='' />
        <img src={process.env.PUBLIC_URL + '/images/HTP.svg'} alt='' />
        <img src={process.env.PUBLIC_URL + '/images/MAX.svg'} alt='' />
      </div>
    </div>
  );
};

export default Footer;
