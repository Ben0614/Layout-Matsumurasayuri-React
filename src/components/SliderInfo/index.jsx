import React from 'react'
import TopSlider from './TopSlider'
import './index.css'

// list內容
const navbarContent = [
  'TOP',
  'NEWS',
  'SCHEDULE',
  'PROFILE',
  'WORKS',
  'GALLERY',
  'CONTACT',
]

export default function SliderInfo(props) {
  return (
    <div className="slider-info">
      <div className="container">
        {/* 手機 */}
        {/* link */}
        <ul className="info">
        {/* 迴圈生成內容 */}
          {navbarContent.map((v, i) => {
            return (
              <li>
                <a href="#/">{v}</a>
              </li>
            )
          })}
        </ul>
        {/* 輪播 */}
        <TopSlider />
      </div>
    </div>
  )
}
