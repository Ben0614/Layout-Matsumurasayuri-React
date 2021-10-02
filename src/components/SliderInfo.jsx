import React from 'react'
import TopSlider from './TopSlider'
import './SliderInfo.css'

export default function SliderInfo() {
  return (
    <div className="slider-info">
      <div className="container">
        {/* 手機 */}
        <ul className="info">
          <li>
            <a href="#/">NEWS</a>
          </li>
          <li>
            <a href="#/">SCHEDULE</a>
          </li>
          <li>
            <a href="#/">PROFILE</a>
          </li>
          <li>
            <a href="#/">WORKS</a>
          </li>
          <li>
            <a href="#/">GALLERY</a>
          </li>
          <li>
            <a href="#/">TWITTER</a>
          </li>
          <li>
            <a href="#/">INSTAGRAM</a>
          </li>
          <li>
            <a href="#/">WEIBO</a>
          </li>
        </ul>
        <TopSlider />
      </div>
    </div>
  )
}
