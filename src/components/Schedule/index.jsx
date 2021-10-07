import React from 'react'
import './index.css'

const itemContent = [
  {
    day: '05',
    week: 'TUE',
    month: '2021.10',
    cate: 'TV',
    time: '18:55～19:25',
    content: 'NHK Eテレ「沼にハマってきいてみた」',
  },
  {
    day: '12',
    week: 'TUE',
    month: '2021.10',
    cate: 'MAGAZINE',
    time: '',
    content: 'BAILA',
  },
  {
    day: '29',
    week: 'FRI',
    month: '2021.10',
    cate: 'OTHER',
    time: '',
    content: 'NHK Eテレ「沼にハマってきいてみた」',
  },
]

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
          {itemContent.map((v, i) => {
            return (
              <>
                {/* 迴圈生成item */}
                <a href="#/">
                  <div className="item">
                    <div className="date">
                      <div className="day">{v.day}</div>
                      <div className="week">{v.week}</div>
                      <div className="month">{v.month}</div>
                    </div>
                    <div className="content">
                      <div className="cate-time">
                        <div className="cate">
                          <a href="#/">{v.cate}</a>
                        </div>
                        <div className="time">{v.time}</div>
                      </div>
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
