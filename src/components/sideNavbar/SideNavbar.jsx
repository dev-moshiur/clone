


import React from 'react'
import './sideNavbar.scss'
export default function SideNavbar() {
  return (
    <div className={'sidenav'}>
      <a href='#' className="item">
        <div className="dot">

        </div>
        <div className="toggle">
          <div className="wrapper">
            <span>Our Costomers</span>

          </div>
        </div>
      </a>
      <a href='#' className="item">
        <div className="dot">

        </div>
        <div className="toggle">
          <div className="wrapper">
            <span>How to use?</span>
            

          </div>
        </div>
      </a>
      <a href='#' className="item">
        <div className="dot">

        </div>
        <div className="toggle">
          <div className="wrapper">
            <span>Features</span>

          </div>
        </div>
      </a>
      <a href='#' className="item">
        <div className="dot">

        </div>
        <div className="toggle">
          <div className="wrapper">
            <span>Supports</span>

          </div>
        </div>
      </a>

    </div>
  )
}
