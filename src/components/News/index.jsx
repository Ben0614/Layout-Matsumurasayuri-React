import React from 'react'
import './index.css'

const itemContent = [
  {
    date: '2021.09.30',
    cate: 'OTHER',
    content: 'ファッション誌「BAILA」レギュラーモデルに決定！',
  },
  {
    date: '2021.09.22',
    cate: 'OTHER',
    content: 'JAグループお米消費拡大アンバサダーに就任！',
  },
  {
    date: '2021.08.30',
    cate: 'MEDIA',
    content: '映画「ずっと独身でいるつもり？」に出演決定！',
  },
]

export default function News(props) {
  const { getNews } = props
  return (
    // 設定ref
    <div className="container" ref={getNews}>
      <div className="news">
        {/* 標題行 */}
        <div className="title-row">
          {/* 標題 */}
          <div className="title">News</div>
          {/* 展示更多按鈕 */}
          <div className="view">
            <a href="#/">VIEW ALL</a>
          </div>
        </div>
        {/* item-gorup */}
        <div className="item-group">
          {itemContent.map((v, i) => {
            return (
              <>
                {/* 迴圈生成item */}
                <a href="#/" key={i}>
                  <div className="item">
                    <div className="time">
                      <div className="date">{v.date}</div>
                      <div className="cate">{v.cate}</div>
                    </div>
                    <div className="content">
                      <p>{v.content}</p>
                    </div>
                  </div>
                </a>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}
