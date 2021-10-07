import React from 'react'
import './index.css'

// list內容
const content = [
  'NEWS',
  'SCHEDULE',
  'PROFILE',
  'WORKS',
  'GALLERY',
  'TWITTER',
  'INSTAGRAM',
  'WEIBO',
  'CONTACT',
]

export default function Footer() {
  return (
    <footer>
      <div className="container">
        {/* logo */}
        <div className="logo">
          <img
            src="/matsumurasayuri-rwd-react/images/mobile/logo.svg"
            alt=""
          />
        </div>
        {/* link */}
        <ul className="info">
          {/* 內容區 */}
          {/* 迴圈content生成內容 */}
          {content.map((v, i) => {
            return (
              <li>
                <a href="#/">{v}</a>
              </li>
            )
          })}
        </ul>
      </div>
      {/* copyright */}
      <div className="copyright">&copy;乃木坂46LLC</div>
    </footer>
  )
}
