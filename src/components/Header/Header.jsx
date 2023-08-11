import React from 'react'
import './Header.css'
import clog from "../../assets/Setting.png"
function Header() {
  return (
    <>
      <div className='header-bg'>
        <h3>CREDIT-CHART</h3>
        <img src={clog} alt={clog} />
      </div>
    </>
  )
}

export default Header