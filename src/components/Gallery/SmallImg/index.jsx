import React from 'react'
import './index.css'

// 圖片牆
function SmallImg(props) {
  // 接收props
  const { imgPath, setShowBigImg } = props
  return (
    <div className="img-group">
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
    </div>
  )
}

export default SmallImg
