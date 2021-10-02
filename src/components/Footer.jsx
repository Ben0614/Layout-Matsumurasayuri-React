import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <img src="../images/mobile/logo.svg" alt="" />
        </div>
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
      <div className="copyright">&copy;乃木坂46LLC</div>
    </footer>
  )
}
