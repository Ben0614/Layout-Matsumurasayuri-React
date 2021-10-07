import React, { Component } from 'react'
import Slider from 'react-slick'
import './index.css'

// 手機板圖片
const imgPathxMobile = [
  '/matsumurasayuri-rwd-react/images/mobile/b558b7dd13c18c8f4d9e502b0544b-01.jpg',
  '/matsumurasayuri-rwd-react/images/mobile/7f0c5e36a81136f296e684a89fc17-01.jpg',
  '/matsumurasayuri-rwd-react/images/mobile/ac79b4584d8aba06a4c0a70ac05fa-01.jpg',
  '/matsumurasayuri-rwd-react/images/mobile/2b9a525f218a4379e02da68691699-01.jpg',
]

// 桌機版圖片
const imgPathComputer = [
  '/matsumurasayuri-rwd-react/images/b558b7dd13c18c8f4d9e502b0544b.jpg',
  '/matsumurasayuri-rwd-react/images/7f0c5e36a81136f296e684a89fc17.jpg',
  '/matsumurasayuri-rwd-react/images/ac79b4584d8aba06a4c0a70ac05fa.jpg',
  '/matsumurasayuri-rwd-react/images/2b9a525f218a4379e02da68691699.jpg',
]

export default class TopSlider extends Component {
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="topSlider">
        {/* 手機 */}
        <Slider className="d-block d-lg-none" {...settings}>
          {/* 迴圈生成圖片 */}
          {imgPathxMobile.map((v, i) => {
            return (
              <div key={i} className="topPic">
                <img src={v} alt="" />
              </div>
            )
          })}
        </Slider>
        {/* 桌機 */}
        <Slider className="d-none d-lg-block" {...settings}>
          {/* 迴圈生成圖片 */}
          {imgPathComputer.map((v, i) => {
            return (
              <div key={i} className="topPic">
                <img src={v} alt="" />
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}
