import React from 'react'
import Logo from './Logo/Logo'
import './Menu.scss'

const Menu = () => {
  return (
      <div className="menu__container">
          <Logo logo='Kore' address="agencjakore.pl" />
          <Logo logo='HTP' address="hightidepictures.eu" />
          <Logo logo='MAX' address="" />
</div>
  )
}

export default Menu