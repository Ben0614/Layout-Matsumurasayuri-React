import React, { useRef, useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SliderInfo from './components/SliderInfo'
import News from './components/News'
import Schedule from './components/Schedule'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import './App.css'

function App() {
  // 設定news
  const news = useRef()

  // 控制Gallery的圖片，點擊小圖顯示大圖
  const [showBigImg, setShowBigImg] = useState('')

  return (
    <>
      {/* 傳送news */}
      <Navbar setNews={news} />
      <Header />
      <SliderInfo />
      {/* 獲取news */}
      <News getNews={news} />
      <Schedule />
      <Gallery showBigImg={showBigImg} setShowBigImg={setShowBigImg} />
      <Footer />
    </>
  )
}

export default App
