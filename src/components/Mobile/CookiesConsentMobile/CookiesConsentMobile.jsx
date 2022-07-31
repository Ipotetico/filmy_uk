import React from 'react';
import './CookiesConsentMobile.scss'

const CookiesConsentMobile = ({cookiesConsent,setCookiesConsent}) => {
    return (
        <div className={cookiesConsent ? "cookiesConsent__container__mobile close":"cookiesConsent__container__mobile"}>
            <h1>Dbamy o Twoją prywatność</h1>
            <div className="paragraph__container">
            <p>Nasza strona przetwarza Twoje dane osobowe zbierane w Internecie, w tym informacje zapisywane za pomocą technologii takich jak pliki cookies, sygnalizatory WWW lub innych podobnych technologii umożliwiających świadczenie dopasowanych i bezpiecznych usług, personalizację treści oraz reklamy, udostępnianie funkcji mediów społecznościowych oraz analizowanie ruchu w Internecie.

                My i nasi partnerzy uzyskujemy dostęp i przechowujemy informacje na urządzeniu oraz przetwarzamy dane osobowe, takie jak unikalne identyfikatory i standardowe informacje wysyłane przez urządzenie czy dane przeglądania w celu wyboru oraz tworzenia profilu spersonalizowanych treści i reklam, pomiaru wydajności treści i reklam, a także rozwijania i ulepszania produktów. Za zgodą użytkownika my i nasi partnerzy możemy korzystać z precyzyjnych danych geolokalizacyjnych oraz identyfikację poprzez skanowanie urządzeń.
            </p>
            </div>
            <div className="buttons__container">
                <button onClick={()=>setCookiesConsent(true)} className="btn red">Nie, dziękuję</button>
                <button onClick={()=>setCookiesConsent(true)} className="btn green">Tak, zgadzam się</button>
            </div>
        </div>
    );
};

export default CookiesConsentMobile;