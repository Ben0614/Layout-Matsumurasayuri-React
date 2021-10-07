import React, { useEffect, useRef } from 'react'
import './index.css'

// list內容
const content = [
  'TOP',
  'NEWS',
  'SCHEDULE',
  'PROFILE',
  'WORKS',
  'GALLERY',
  'CONTACT',
]

export default function Navbar(props) {
  // 獲取news
  const { setNews } = props
  // 設定navbar和漢堡選單的ref
  const navbarIsShow = useRef()
  const listIsShow = useRef()
  const topLine = useRef()
  const centerLine = useRef()
  const bottomLine = useRef()

  // 設定鉤子，一掛載就監聽滾動事件
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  // 設定鉤子，一卸載就清除監聽滾動事件
  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // 如果頁面下滑的高度大於News區塊距離頂部的高度，就讓navbarIsShow添加和移除class
  const handleScroll = () => {
    if (window.pageYOffset > setNews.current.offsetTop) {
      navbarIsShow.current.classList.add('isShow')
      navbarIsShow.current.classList.remove('isHide')
    } else {
      navbarIsShow.current.classList.add('isHide')
      navbarIsShow.current.classList.remove('isShow')
    }
  }

  // 點擊漢堡選單，切換漢堡list的class
  const hanChange = () => {
    listIsShow.current.classList.toggle('listShow')
    // 改變漢堡選單的樣式
    // 先判斷漢堡list是否有被開啟，然後再修改漢堡選單的樣式
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
      {/* 手機 */}
      <div className="navbar" ref={navbarIsShow}>
        {/* logo */}
        <div className="logo">
          <img
            src="/matsumurasayuri-rwd-react/images/mobile/logo_lower_page.svg"
            alt=""
          />
        </div>
        {/* 漢堡選單 */}
        <div
          className="ham"
          // 點擊漢堡，調用hanChange
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
          {/* 迴圈content生成內容 */}
          {content.map((v, i) => {
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
