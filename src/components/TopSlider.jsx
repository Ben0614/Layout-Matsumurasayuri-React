import React, { Component } from 'react'
import Slider from 'react-slick'
import './TopSlider.css'

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
        <Slider {...settings}>
          <div className="topPic">
            <img
              className="d-block d-lg-none"
              src="./images/mobile/b558b7dd13c18c8f4d9e502b0544b-01.jpg"
              alt=""
            />
            <img
              className="d-none d-lg-block"
              src="./images/b558b7dd13c18c8f4d9e502b0544b.jpg"
              alt=""
            />
          </div>
          <div className="topPic">
            <img
              className="d-block d-lg-none"
              src="./images/mobile/7f0c5e36a81136f296e684a89fc17-01.jpg"
              alt=""
            />
            <img
              className="d-none d-lg-block"
              src="./images/7f0c5e36a81136f296e684a89fc17.jpg"
              alt=""
            />
          </div>
          <div className="topPic">
            <img
              className="d-block d-lg-none"
              src="./images/mobile/ac79b4584d8aba06a4c0a70ac05fa-01.jpg"
              alt=""
            />
            <img
              className="d-none d-lg-block"
              src="./images/ac79b4584d8aba06a4c0a70ac05fa.jpg"
              alt=""
            />
          </div>
          <div className="topPic">
            <img
              className="d-block d-lg-none"
              src="./images/mobile/2b9a525f218a4379e02da68691699-01.jpg"
              alt=""
            />
            <img
              className="d-none d-lg-block"
              src="./images/2b9a525f218a4379e02da68691699.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    )
  }
}
