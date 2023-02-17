
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import React from 'react'
import './hero.scss'
export default function Hero() {
  return (
    <div className='hero'>
      <div className="left">
        <div className="topText">
        Transform Google Forms Into Interactive Workflows
        </div>
        <div className="bottomtext">
        BoloForms is a Google Forms add on that allows you to add conditional logic to your forms. With BoloForms, you can create interactive workflows, approval flows & automate processes.
        </div>
        <div className="btn">
          {/* <RocketLaunchIcon/> */}
          <span>
            Install For Free
          </span>
        </div>
      </div>
      <div className="right">
        <div className="embedContainer">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/riiUkCRpIio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}
