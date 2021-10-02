import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      {/* 手機 */}
      <div className="navbar-height">
        <div className="navbar">
          <div className="logo">
            <img src="../images/mobile/logo_lower_page.svg" alt="" />
          </div>
          <div className="ham">
            <div className="top-line"></div>
            <div className="center-line"></div>
            <div className="bottom-line"></div>
          </div>
        </div>
      </div>
    </>
  )
}
