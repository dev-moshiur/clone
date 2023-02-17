

import React from 'react'
import './feacherCard.scss'
export default function FeacherCard({src,heading,text}) {
  return (
    <div className='feacherCardItem'>
      <div className="imageContainer">
        <img src={src} alt="" />
      </div>
      <div className="headings">
        {heading}
      </div>
      <div className="texts">
        {text}
      </div>
    </div>
  )
}
