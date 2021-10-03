import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <>
      {/* 手機 */}
      {/* 只放一個logo */}
      <header>
        <div className="container">
          <div className="logo">
            <img src="/layout-matsumurasayuri-react/images/logo.svg" alt="" />
          </div>
        </div>
      </header>

      {/* 桌機 */}
      <div className="container">
        <div className="header-computer">
          {/* logo */}
          <div className="logo">
            <img src="/layout-matsumurasayuri-react/images/logo.svg" alt="" />
          </div>
          {/* link連結 */}
          <div className="info">
            <p>
              <a href="#/">NEWS</a>
            </p>
            <p>
              <a href="#/">SCHEDULE</a>
            </p>
            <p>
              <a href="#/">PROFILE</a>
            </p>
            <p>
              <a href="#/">WORKS</a>
            </p>
            <p>
              <a href="#/">GALLERY</a>
            </p>
            <p>
              <a href="#/">TWITTER</a>
            </p>
            <p>
              <a href="#/">INSTAGRAM</a>
            </p>
            <p>
              <a href="#/">WEIBO</a>
            </p>
            <p>
              <a href="#/">CONTACT</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
