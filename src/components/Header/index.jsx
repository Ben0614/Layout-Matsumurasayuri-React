import React from 'react'
import './index.css'

// list內容
const content = [
  'TOP',
  'NEWS',
  'SCHEDULE',
  'PROFILE',
  'WORKS',
  'GALLERY',
  'CONTACT',
]

export default function Header() {
  return (
    <>
      {/* 手機 */}
      {/* 只放一個logo */}
      <header>
        <div className="container">
          <div className="logo">
            <img src="/matsumurasayuri-rwd-react/images/logo.svg" alt="" />
          </div>
        </div>
      </header>

      {/* 桌機 */}
      <div className="container">
        <div className="header-computer">
          {/* logo */}
          <div className="logo">
            <img src="/matsumurasayuri-rwd-react/images/logo.svg" alt="" />
          </div>
          {/* link連結 */}
          <ul className="info">
            {/* 迴圈生成內容 */}
            {content.map((v, i) => {
              return (
                <li>
                  <a href="#/">{v}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
