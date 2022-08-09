import React,{useState} from "react";
import './LicenceConsent.scss'
import Licence from "../Licence/Licence";


 const LicenceConsent = ({licence, setLicence}) => {
    
const [show, setShow] = useState(false)
    
    return (
        <>
            {show && <Licence setShow={setShow}/>}
      <div className="licenceConsent___container">
          <div onClick={() => setLicence(!licence)} className={licence ? "licenceConsent___window true" : "licenceConsent___window"}>
              {licence && <img
                  src={process.env.PUBLIC_URL + '/images/accept.svg'}
                  alt=""/>}
          </div>
          <p>Curabitur volutpat metus sit amet pulvinar fermentum. Proin eleifend interdum rhoncus. Sed ac finibus erat. Nullam aliquet quis lectus mollis lobortis. Duis finibus elit et tortor euismod malesuada. Integer ullamcorper, metus nec laoreet fermentum, nibh mi ornare purus, ut dapibus risus erat in lorem. Proin sollicitudin suscipit accumsan. Sed posuere, nunc eu aliquet sodales, elit urna eleifend lorem, <span onClick={()=>setShow(true)}>ut consectetur nisl est eget nisi</span> </p>
      </div>
        </>
    )
}

export default LicenceConsent;