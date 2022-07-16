import React from 'react'
import './Logo.scss'

const Logo = ({logo, address}) => {
  return (
      <div className="logo__container">
          <a href={`https://${address}`} target="_blank" rel="noreferrer">
                <img src={process.env.PUBLIC_URL + `/images/${logo}.svg`} alt="" />
          </a>
   
</div>
  )
}

export default Logo