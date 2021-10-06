import React, { useEffect, useRef } from 'react'
import './Navbar.css'

export default function Navbar(props) {
  const { twitter } = props
  const navbarIsShow = useRef()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset > twitter.current.offsetTop) {
      navbarIsShow.current.classList.add('isShow')
      navbarIsShow.current.classList.remove('isHide')
    } else {
      navbarIsShow.current.classList.add('isHide')
      navbarIsShow.current.classList.remove('isShow')
    }
  }

  return (
    // 手機
    // 外表包一層設定高度，這樣用fixed就不會讓底下的盒子跑上來
    <div className="navbar" ref={navbarIsShow}>
      {/* logo */}
      <div className="logo">
        <img
          src="/layout-matsumurasayuri-react/images/mobile/logo_lower_page.svg"
          alt=""
        />
      </div>
      {/* 漢堡選單 */}
      <div className="ham">
        <div className="top-line"></div>
        <div className="center-line"></div>
        <div className="bottom-line"></div>
      </div>
    </div>
  )
}
