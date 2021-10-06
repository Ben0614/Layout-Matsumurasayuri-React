import React, { useRef } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SliderInfo from './components/SliderInfo'
import News from './components/News'
import Schedule from './components/Schedule'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import './App.css'

function App() {
  const news = useRef()
  return (
    <>
      <Navbar setNews={news} />
      <Header />
      <SliderInfo />
      <News getNews={news} />
      <Schedule />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
