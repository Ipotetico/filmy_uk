import React from "react";
import './Licence.scss'
import texts from  '../../../../data/texts'

const Licence = ({setShow}) => {
    return (
<div className="licencePopup___container"><img onClick={()=>setShow(false)} src={process.env.PUBLIC_URL + '/images/close.svg'} alt=""/><h1>{texts.licence.title}</h1> <h2>{texts.licence.subtitle}</h2><p>{texts.licence.copy}</p>

</div>
    )
}

export default Licence