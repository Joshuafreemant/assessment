import React from 'react'
import './EditHeader.css'
import logo from '../../assets/logo.png'
import { ArrowIcon } from '../../assets/Icons'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <div className='header-bg'>
        <div className="content">
          <Link to="/"><ArrowIcon /></Link>
          
        <h5>Edit per diem rates</h5>
        </div>
        
      </div>
    </>
  )
}

export default Header