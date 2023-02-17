

import React from 'react'
import './toggleMenu.scss'
export default function ToggleMenu({menuOpen}) {
  return (
    <div className={menuOpen ?'toggleMenu active':'toggleMenu'}>
        <div className="links">
            <div className="link">Products</div>
            <div className="link">Blogs</div>
            <div className="link">Guides</div>
            <div className="link">About Us</div>
        </div>
        <div className="btn">
          {/* <RocketLaunchIcon/> */}
          <span>
            Install For Free
          </span>
        </div>
    </div>
  )
}
