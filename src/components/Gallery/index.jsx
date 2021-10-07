import React from 'react'
import BottomSliderMobile from './BottomSliderMobile'
import SmallImg from './SmallImg'
import BigImg from './BigImg'
import './index.css'

export default function Gallery(props) {
  // 圖片path
  const imgPath = [
    '/matsumurasayuri-rwd-react/images/800_800_102400.jpg',
    '/matsumurasayuri-rwd-react/images/800_800_102400 (1).jpg',
    '/matsumurasayuri-rwd-react/images/800_800_102400 (2).jpg',
    '/matsumurasayuri-rwd-react/images/800_800_102400 (3).jpg',
    '/matsumurasayuri-rwd-react/images/800_800_102400 (4).jpg',
    '/matsumurasayuri-rwd-react/images/800_800_102400 (5).jpg',
    '/matsumurasayuri-rwd-react/images/800_800_102400 (6).jpg',
    '/matsumurasayuri-rwd-react/images/800_800_102400 (7).jpg',
  ]
  // 控制大圖是否顯示的狀態
  const { showBigImg, setShowBigImg } = props

  return (
    <div className="gallery">
      <div className="container">
        {/* 標題 */}
        <div className="title">GALLERY</div>
        {/* 桌機 */}
        {/* 圖片牆 */}
        <SmallImg imgPath={imgPath} setShowBigImg={setShowBigImg} />
      </div>
      {/* 手機 */}
      {/* 輪播 */}
      <BottomSliderMobile imgPath={imgPath} setShowBigImg={setShowBigImg} />
      {/* 手機 */}
      {/* 展示更多按鈕 */}
      <div className="view">
        <a href="#/">
          <p>VIEW ALL</p>
          <div className="arrow">
            <img
              src="/matsumurasayuri-rwd-react/images/mobile/arrow.png"
              alt=""
            />
          </div>
        </a>
      </div>
      {/* 點擊顯示的大圖 */}
      <BigImg
        imgPath={imgPath}
        showBigImg={showBigImg}
        setShowBigImg={setShowBigImg}
      />
    </div>
  )
}
