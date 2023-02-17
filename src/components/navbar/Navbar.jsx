

import {Clear, Menu} from '@material-ui/icons'
import React,{useState} from 'react'
import ToggleMenu from '../toggleMenu/ToggleMenu'
import './navbar.scss'
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='navbar'>
      <div className="wrapper">

     
      <div className="left">
        <div className="logo">
          <img src='https://www.boloforms.com/_next/static/media/logo-text.e6f7617c.svg'/>
        </div>
        <div className="navLinks">
          <a href="#">
            <span>Products</span>
          </a>
          <a href="#">Pricing</a>
          <a href="#">Guides</a>
          <a href="#">Templates</a>
        </div>
      </div>
      <div className="right">
        <button>Install Now</button>
        <button>BoloForms Premium</button>
      </div>
      <div className="menubar" onClick={()=>setMenuOpen((pre)=>!pre)}>
        
        {menuOpen && <Clear/>}
        {!menuOpen && <Menu/>}
        
      </div>
      <div className="toggle">
        <ToggleMenu menuOpen={menuOpen}/>
      </div>
    
    </div> 
    </div>
  )
}
