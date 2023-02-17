


import React from 'react'
import './navbar.scss'
export default function Navbar() {
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
    </div> 
    </div>
  )
}
