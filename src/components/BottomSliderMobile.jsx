import React, { Component } from 'react'
// 安裝並引入react-slick
import Slider from 'react-slick'
import './BottomSliderMobile.css'

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
    return (
      <div className="bottomSlider">
        <Slider {...settings}>
          <div className="pic">
            <img
              src="/layout-matsumurasayuri-react/images/800_800_102400.jpg"
              alt=""
            />
          </div>
          <div className="pic">
            <img
              src="/layout-matsumurasayuri-react/images/800_800_102400 (1).jpg"
              alt=""
            />
          </div>
          <div className="pic">
            <img
              src="/layout-matsumurasayuri-react/images/800_800_102400 (2).jpg"
              alt=""
            />
          </div>
          <div className="pic">
            <img
              src="/layout-matsumurasayuri-react/images/800_800_102400 (3).jpg"
              alt=""
            />
          </div>
          <div className="pic">
            <img
              src="/layout-matsumurasayuri-react/images/800_800_102400 (4).jpg"
              alt=""
            />
          </div>
          <div className="pic">
            <img
              src="/layout-matsumurasayuri-react/images/800_800_102400 (5).jpg"
              alt=""
            />
          </div>
          <div className="pic">
            <img
              src="/layout-matsumurasayuri-react/images/800_800_102400 (6).jpg"
              alt=""
            />
          </div>
          <div className="pic">
            <img
              src="/layout-matsumurasayuri-react/images/800_800_102400 (7).jpg"
              alt=""
            />
          </div>
          <div className="pic">
            <img
              src="/layout-matsumurasayuri-react/images/800_800_102400 (8).jpg"
              alt=""
            />
          </div>
          <div className="pic">
            <img
              src="/layout-matsumurasayuri-react/images/800_800_102400 (9).jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    )
  }
}
