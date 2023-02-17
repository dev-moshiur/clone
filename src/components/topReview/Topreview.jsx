
import {Star} from '@material-ui/icons'
import React from 'react'
import './topreview.scss'
export default function Topreview() {
  return (
    <div className='topreview'>
        <div className="text">
        “ Boloforms has completely revolutionized our form approval process. It is incredibly easy to use and simple to set up, saving us countless hours of work. We can now easily manage all of our form approvals, assign tasks to different team members and track progress all in one place. Boloforms is a must-have for any business looking for an efficient Form Approval Workflow Software! "
        </div>
        <div className="stars">
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
        <div className="person">
            <div className="imgContainer">
                <img src={`https://www.boloforms.com/_next/static/media/patrick.4de6d5b1.jpeg`} alt="" />
            </div>
            <div className="info">
                <div className="name">
                Patrick Nyama,

                </div>
                <div className="tittle">
                Edmonton CA

                </div>
            </div>
            
        </div>
    </div>
  )
}
