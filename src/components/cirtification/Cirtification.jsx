

import React from 'react'
import './cirtification.scss'
export default function Cirtification() {
  return (
    <div className='cirtification'>
        <div className="imgContain">
            <img src='https://www.boloforms.com/_next/static/media/moneyback-gurantee.8417d885.png' alt="" />
        </div>
        <div className="textContain">
            <div className="tittle">
            MY 100% NO-RISK DOUBLE-GUARANTEE
            </div>
            <div className="headin">
            If you don’t like BoloForms over the next 30 days, I will happily refund 100% of your purchase. No questions asked.
            </div>
            <div className="text">
            Here's why I'm offering this -
            <br/>
            <br/>
            I have seen the power of automating your business workflows. Take some time out of your busy schedule today and see what all things can be automated in your workflows.
            <br/>
            <br/>
            You will find that most of your time is going in doing things that could be done better by automating. You just have to give it a shot!
            <br/>
            <br/>
            Start with automating small workflow and then gradually you will love it!!
            <br/>
            <br/>
            Thank you, and I hope we'll get the opportunity to be a part of your growth journey soon!
            </div>
            <div className="sign">
                <div className="imgContainer">
                    <img src={`https://www.boloforms.com/_next/static/media/paresh-signature.ffbb67b9.png`} alt="" />
                </div>
                <div className="name">
                Paresh Deshmukh
                </div>
                <div className="identity">
                Co-Founder BoloForms
                </div>
            </div>
        </div>
        
    </div>
  )
}
