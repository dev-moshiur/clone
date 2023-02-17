import React from 'react'
import './features.scss'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CheckIcon from '@mui/icons-material/Check';
export default function Features() {
  return (
    <div className='features'>
        <div className="buttons">
        <button><CloudDownloadIcon/><span>Install Now</span></button>
        <button><RocketLaunchIcon/><span>BoloForms Premium</span></button>

        </div>
        <div className="points">
            <div className="colum">
                <CheckIcon className='icon'/>
                <span>Trusted by 50000+ Businesses</span>
            </div>
            <div className="colum">
                <CheckIcon className='icon'/>
                <span>30 Days Money Back Guarantee</span>
            </div>
            <div className="colum">
                <CheckIcon className='icon'/>
                <span>1-1 Zoom & WhatsApp Onboarding</span>
            </div>
            
            
        </div>
    </div>
  )
}
