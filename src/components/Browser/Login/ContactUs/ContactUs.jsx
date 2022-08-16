import React from "react";
import texts from '../../../data/texts'
import './ContactUs.scss'


const ContactUs = () => {
    return (
        <>
 <div className="contactUs___container">
     <h1>{texts.contactUs.thanhs}</h1>
     <h2>{texts.contactUs.copyOne}</h2>
     <h2>{texts.contactUs.copyTwo}</h2>
 </div>
        </>
    )
};

export default ContactUs;