import React, { useEffect, useRef } from 'react'
import './Navbar.css'

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

export default function Navbar(props) {
  const { setNews } = props
  const navbarIsShow = useRef()
  const listIsShow = useRef()
  const topLine = useRef()
  const centerLine = useRef()
  const bottomLine = useRef()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset > setNews.current.offsetTop) {
      navbarIsShow.current.classList.add('isShow')
      navbarIsShow.current.classList.remove('isHide')
    } else {
      navbarIsShow.current.classList.add('isHide')
      navbarIsShow.current.classList.remove('isShow')
    }
  }

  const hanChange = () => {
    listIsShow.current.classList.toggle('listShow')
    if (listIsShow.current.classList.contains('listShow')) {
      topLine.current.classList.add('top-open')
      centerLine.current.classList.add('center-open')
      bottomLine.current.classList.add('bottom-open')
    } else {
      topLine.current.classList.remove('top-open')
      centerLine.current.classList.remove('center-open')
      bottomLine.current.classList.remove('bottom-open')
    }
  }

  return (
    <>
      {/* // 手機
    // 外表包一層設定高度，這樣用fixed就不會讓底下的盒子跑上來 */}
      <div className="navbar" ref={navbarIsShow}>
        {/* logo */}
        <div className="logo">
          <img
            src="/layout-matsumurasayuri-react/images/mobile/logo_lower_page.svg"
            alt=""
          />
        </div>
        {/* 漢堡選單 */}
        <div
          className="ham"
          onClick={() => {
            hanChange()
          }}
        >
          <div className="top-line" ref={topLine}></div>
          <div className="center-line" ref={centerLine}></div>
          <div className="bottom-line" ref={bottomLine}></div>
        </div>
      </div>

      <div class="ham-list" ref={listIsShow}>
        <ul>
          {/* map */}

          {navbarContent.map((v, i) => {
            return (
              <li>
                <a href="#/">{v}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
