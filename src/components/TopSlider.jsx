import React, { Component } from 'react'
import Slider from 'react-slick'
import './TopSlider.css'

const imgPathxMobile = [
  '/layout-matsumurasayuri-react/images/mobile/b558b7dd13c18c8f4d9e502b0544b-01.jpg',
  '/layout-matsumurasayuri-react/images/mobile/7f0c5e36a81136f296e684a89fc17-01.jpg',
  '/layout-matsumurasayuri-react/images/mobile/ac79b4584d8aba06a4c0a70ac05fa-01.jpg',
  '/layout-matsumurasayuri-react/images/mobile/2b9a525f218a4379e02da68691699-01.jpg',
]
const imgPathComputer = [
  '/layout-matsumurasayuri-react/images/b558b7dd13c18c8f4d9e502b0544b.jpg',
  '/layout-matsumurasayuri-react/images/7f0c5e36a81136f296e684a89fc17.jpg',
  '/layout-matsumurasayuri-react/images/ac79b4584d8aba06a4c0a70ac05fa.jpg',
  '/layout-matsumurasayuri-react/images/2b9a525f218a4379e02da68691699.jpg',
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
