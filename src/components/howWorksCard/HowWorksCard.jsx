

import React from 'react'
import './howWorksCard.scss'
export default function HowWorksCard({img,head,text}) {
  return (
    <div className='workCom'>
      <div className="imgContainer">
        <img src={img} alt="" />

      </div>
      <div className="head">
        {head}
      </div>
      <div className="text">
        {text}
      </div>

    </div>
  )
}
