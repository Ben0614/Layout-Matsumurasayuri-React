import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      {/* 手機 */}
      {/* 外表包一層設定高度，這樣用fixed就不會讓底下的盒子跑上來 */}
      <div className="navbar-height">
        <div className="navbar">
          {/* logo */}
          <div className="logo">
            <img
              src="/layout-matsumurasayuri-react/images/mobile/logo_lower_page.svg"
              alt=""
            />
          </div>
          {/* 漢堡選單 */}
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
