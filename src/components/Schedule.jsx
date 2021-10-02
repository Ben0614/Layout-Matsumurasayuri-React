import React from 'react'

export default function Schedule() {
  return (
    <div className="container">
      <div className="schedule">
        {/* 標題行 */}
        <div className="title-row">
          {/* 標題 */}
          <div className="title">SCHEDULE</div>
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
              <div className="date">
                <div className="day">05</div>
                <div className="week">TUE</div>
                <div className="month">2021.10</div>
              </div>
              <div className="content">
                <div className="cate-time">
                  <div className="cate">
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
            <div className="item">
              <div className="date">
                <div className="day">12</div>
                <div className="week">TUE</div>
                <div className="month">2021.10</div>
              </div>
              <div className="content">
                <div className="cate-time">
                  <div className="cate">
                    <a href="#/">MAGAZINE</a>
                  </div>
                </div>
                <p>BAILA</p>
              </div>
            </div>
          </a>
          {/* item */}
          <a href="#/">
            <div className="item">
              <div className="date">
                <div className="day">29</div>
                <div className="week">FRI</div>
                <div className="month">2021.10</div>
              </div>
              <div className="content">
                <div className="cate-time">
                  <div className="cate">
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
