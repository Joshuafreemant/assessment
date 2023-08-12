import React from 'react'
import './Header.css'
import { SettingIcon } from '../../assets/Icons'
function Header() {
  return (
    <>
      <div className='header-bg'>
        <h3>CREDIT-CHART</h3>
        <SettingIcon/>
      </div>
    </>
  )
}

export default Header