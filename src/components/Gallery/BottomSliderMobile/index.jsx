import React, { Component } from 'react'
// 安裝並引入react-slick
import Slider from 'react-slick'
import './index.css'

export default class BottomSliderMobile extends Component {
  render() {
    const settings = {
      // 輪播圖片置中重點
      centerMode: true,
      // 重點2 (中間的空白要到.pic用padding)
      centerPadding: '50px',
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    // 接收props
    const { imgPath, setShowBigImg } = this.props

    return (
      <div className="bottomSlider">
        <Slider {...settings}>
          {/* 迴圈 */}
          {imgPath.map((v, i) => {
            return (
              <div
                className="pic"
                key={i}
                // 點擊圖片，就讓狀態更新為此張圖的i
                onClick={() => {
                  setShowBigImg(i)
                }}
              >
                <img src={v} alt="" />
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}
