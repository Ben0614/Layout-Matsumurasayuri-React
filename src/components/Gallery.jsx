import React from 'react'
import BottomSliderMobile from './BottomSliderMobile'

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="container">
        <div className="title">GALLERY</div>
        {/* 桌機 */}
        <div className="img-group">
          <div className="pic">
            <img src="../images/800_800_102400.jpg" alt="" />
          </div>
          <div className="pic">
            <img src="../images/800_800_102400 (1).jpg" alt="" />
          </div>
          <div className="pic">
            <img src="../images/800_800_102400 (2).jpg" alt="" />
          </div>
          <div className="pic">
            <img src="../images/800_800_102400 (3).jpg" alt="" />
          </div>
          <div className="pic">
            <img src="../images/800_800_102400 (4).jpg" alt="" />
          </div>
          <div className="pic">
            <img src="../images/800_800_102400 (5).jpg" alt="" />
          </div>
          <div className="pic">
            <img src="../images/800_800_102400 (6).jpg" alt="" />
          </div>
          <div className="pic">
            <img src="../images/800_800_102400 (7).jpg" alt="" />
          </div>
        </div>
      </div>
      {/* 手機 */}
      <BottomSliderMobile />
      {/* 手機 */}
      <div className="view">
        <a href="#/">
          <p>VIEW ALL</p>
          <div className="arrow">
            <img src="../images/mobile/arrow.png" alt="" />
          </div>
        </a>
      </div>
      {/* 桌機 */}
    </div>
  )
}
