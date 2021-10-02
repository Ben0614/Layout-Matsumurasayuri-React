import React from 'react'

export default function Schedule() {
  return (
    <div class="container">
      <div class="schedule">
        {/* 標題行 */}
        <div class="title-row">
          {/* 標題 */}
          <div class="title">SCHEDULE</div>
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
              <div class="date">
                <div class="day">05</div>
                <div class="week">TUE</div>
                <div class="month">2021.10</div>
              </div>
              <div class="content">
                <div class="cate-time">
                  <div class="cate">
                    <a href="#/">TV</a>
                  </div>
                  <div className="time">18:55～19:25</div>
                </div>
                <p>NHK Eテレ「沼にハマってきいてみた」</p>
              </div>
            </div>
          </a>
          {/* item */}
          <a href="#/">
            <div class="item">
              <div class="date">
                <div class="day">12</div>
                <div class="week">TUE</div>
                <div class="month">2021.10</div>
              </div>
              <div class="content">
                <div class="cate-time">
                  <div class="cate">
                    <a href="#/">MAGAZINE</a>
                  </div>
                </div>
                <p>BAILA</p>
              </div>
            </div>
          </a>
          {/* item */}
          <a href="#/">
            <div class="item">
              <div class="date">
                <div class="day">29</div>
                <div class="week">FRI</div>
                <div class="month">2021.10</div>
              </div>
              <div class="content">
                <div class="cate-time">
                  <div class="cate">
                    <a href="#/">OTHER</a>
                  </div>
                </div>
                <p>NHK Eテレ「沼にハマってきいてみた」</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
