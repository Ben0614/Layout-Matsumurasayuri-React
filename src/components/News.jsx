import React from 'react'

export default function News() {
  return (
    <div className="container">
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
          {/* item */}
          <a href="#/">
            <div className="item">
              <div className="time">
                <div className="date">2021.09.30</div>
                <div className="cate">OTHER</div>
              </div>
              <div className="content">
                <p>ファッション誌「BAILA」レギュラーモデルに決定！</p>
              </div>
            </div>
          </a>
          {/* item */}
          <a href="#/">
            <div className="item">
              <div className="time">
                <div className="date">2021.09.22</div>
                <div className="cate">OTHER</div>
              </div>
              <div className="content">
                <p>JAグループお米消費拡大アンバサダーに就任！</p>
              </div>
            </div>
          </a>
          {/* item */}
          <a href="#/">
            <div className="item">
              <div className="time">
                <div className="date">2021.08.30</div>
                <div className="cate">MEDIA</div>
              </div>
              <div className="content">
                <p>映画「ずっと独身でいるつもり？」に出演決定！</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
