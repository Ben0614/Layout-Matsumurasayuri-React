import React from 'react'

export default function News() {
  return (
    <div class="container">
      <div class="news">
        {/* 標題行 */}
        <div class="title-row">
          {/* 標題 */}
          <div class="title">News</div>
          {/* 展示更多按鈕 */}
          <div class="view">
            <a href="#/">VIEW ALL</a>
          </div>
        </div>
        {/* item-gorup */}
        <div class="item-group">
          {/* item */}
          <a href="#/">
            <div class="item">
              <div class="time">
                <div class="date">2021.09.30</div>
                <div class="cate">OTHER</div>
              </div>
              <div class="content">
                <p>ファッション誌「BAILA」レギュラーモデルに決定！</p>
              </div>
            </div>
          </a>
          {/* item */}
          <a href="#/">
            <div class="item">
              <div class="time">
                <div class="date">2021.09.22</div>
                <div class="cate">OTHER</div>
              </div>
              <div class="content">
                <p>JAグループお米消費拡大アンバサダーに就任！</p>
              </div>
            </div>
          </a>
          {/* item */}
          <a href="#/">
            <div class="item">
              <div class="time">
                <div class="date">2021.08.30</div>
                <div class="cate">MEDIA</div>
              </div>
              <div class="content">
                <p>映画「ずっと独身でいるつもり？」に出演決定！</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
