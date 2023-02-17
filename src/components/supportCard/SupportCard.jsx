

import React from 'react'
import './supportCard.scss'
export default function SupportCard({img,head,text,button}) {
  return (
    <div className='supportCard'>
      <div className="texts">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="head">
        {head}
      </div>
      <div className="text">
        {text}
      </div>
      </div>
      <button>{button}</button>
    </div>
  )
}
