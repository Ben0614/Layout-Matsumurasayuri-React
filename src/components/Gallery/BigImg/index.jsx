import React from 'react'
import './index.css'

function BigImg(props) {
  // 接收props
  const { imgPath, showBigImg, setShowBigImg } = props
  return (
    <div className="big-img-group">
      {imgPath.map((v, i) => {
        return (
          <>
            {/* 如果狀態與自身的i相同，就添加class itemShow 顯示，否則就添加itemHide隱藏 */}
            <div className={showBigImg === i ? 'itemShow' : 'itemHide'} key={i}>
            {/* 點擊X就讓狀態為空 關閉大圖 */}
              <div
                className="close"
                onClick={() => {
                  setShowBigImg('')
                }}
              >
                X
              </div>
              {/* 圖片 */}
              <div className="pic">
                <img src={v} alt="" />
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default BigImg
