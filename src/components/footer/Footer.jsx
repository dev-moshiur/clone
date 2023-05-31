

import { Facebook, Twitter, YouTube } from '@material-ui/icons'
import React from 'react'
import './footer.scss'
export default function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div className="column">
          <div className="item">
            <span>💬</span>
            <span>Live Chat</span>
          </div>
          <div className="item">
            <span>📨</span>
            <span>Support Email</span>
          </div>
          <div className="item">
            <span>📚</span>
            <span>Help Center</span>
          </div>
          <div className="item">
            <span>📅</span>
            <span>Video Call</span>
          </div>
        </div>
        <div className="column">
          <div className="item">
            <span>Pages</span>
            
          </div>
          <div className="item">
            <span>Home</span>
            
          </div>
          <div className="item">
            <span>Pricing</span>
            
          </div>
          <div className="item">
            <span>Blogs</span>
            
          </div>
          <div className="item">
            <span>About Us</span>
            
          </div>
          
        </div>
        <div className="column">
          <div className="item">
            <span>Products</span>
            
          </div>
          <div className="item">
            <span>Forms Approval</span>
            
          </div>
          <div className="item">
            <span>Signature</span>
            
          </div>
          <div className="item">
            <span>Sheetgod</span>
            
          </div>
          <div className="item">
            <span>Google Form UI Enhancer</span>
            
          </div>
          <div className="item">
            <span>BoloForms Document Generator</span>
            
          </div>
          <div className="item">
            <span>Timer + Proctor</span>
            
          </div>
          <div className="item">
            <span>Google Meet Attendence Tracker</span>
            
          </div>

        </div>
        <div className="column">
          <div className="item">
            <span>Legal</span>
            
          </div>
          <div className="item">
            <span>Terms of Service</span>
            
          </div>
          <div className="item">
            <span>Privacy Policy</span>
            
          </div>
          <div className="item">
            <span>Refund Policy</span>
            
          </div>
          <div className="item">
            <span>Data Security & Policy</span>
            
          </div>
          




        </div>
      </div>
      <div className="bottom">
        <div className="love">
          <span>Made with</span>
          <img src={`https://www.boloforms.com/_next/static/media/1f525.a7bd71d6.svg`} alt="" />
          <span>+</span>
          <img src={`https://www.boloforms.com/_next/static/media/2764.8838f014.svg`} alt="" />
          <span>in Bangladesh</span>
        </div>
        <div className="links">
          <Twitter/>
         <YouTube/>
         <Facebook/>
        </div>
      </div>
    </div>
  )
}
