import React from 'react'
import Logo from './Logo/Logo'
import './Menu.scss'
import Search from './Search/Search'
import User from './User/User'

const Menu = () => {
  return (
      <div className="menu__container">
          <Logo logo='Kore' address="agencjakore.pl" />
          <Logo logo='HTP' address="hightidepictures.eu" />
          <Logo logo='MAX' address="" />
          <Search />
          <User/>
</div>
  )
}

export default Menu