
import {Star} from '@material-ui/icons'
import React from 'react'
import './review.scss'
export default function Review({text,img,name}) {
  return (
    <div className='review'>
      

     
      <div className="imgContainer">
        <img src={img} alt="" />
      </div>
      <div className="textContainer">
        <div className="stars">
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
        </div>
        <div className="text">
          {`"${text}"`}
        </div>
        <div className="name">
          {name}
        </div>
      </div>
    </div> 
  )
}
