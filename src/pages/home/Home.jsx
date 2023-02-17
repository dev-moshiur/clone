


import React from 'react'
import Faq from '../../components/faq/Faq'
import FeacherCard from '../../components/feacherCard/FeacherCard'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import HowWorksCard from '../../components/howWorksCard/HowWorksCard'
import Navbar from '../../components/navbar/Navbar'
import Review from '../../components/review/Review'
import SideNavbar from '../../components/sideNavbar/SideNavbar'
import SupportCard from '../../components/supportCard/SupportCard'
import Features from '../../components/features/Features'
import Topreview from '../../components/topReview/Topreview'
import WorkFlow from '../../components/workFlow/WorkFlow'
import Cirtification from '../../components/cirtification/Cirtification'


import './home.scss'
import { Favorite } from '@material-ui/icons'
export default function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <Hero/>
      <div className="heading">
        <div className="head">
        How does BoloForms work?
        </div>
        <div className="tittle">
        Set up your first workflow in just 3 easy steps.

        </div>
      </div>
      <div className="workContainer">
        <HowWorksCard 
            img={`https://www.boloforms.com/_next/static/media/2.2709e204.svg`} 
            head={`Step 1:`} 
            text={`Choose a template or add questions to create your Google Form.`}/>
        <HowWorksCard 
            img={`https://www.boloforms.com/_next/static/media/1.b2cc23b0.svg`} 
            head={`Step 2:`} 
            text={`Enable Single/Multi Step approval and add necessary approvers!`}/>
        <HowWorksCard 
            img={`https://www.boloforms.com/_next/static/media/3.1a7ec00e.svg`} 
            head={`Step 3:`} 
            text={`Now you can enable the workflow and share the Google Form.`}/>
      </div>
      <Review 
        img={`https://www.boloforms.com/_next/static/media/repa.483a1471.jpeg`}
        text={`Boloforms has been an absolute lifesaver for me. It makes workflow tasks much easier and helps to ensure that everything runs smoothly. I love how it automates tasks and eliminates manual processes, saving me time and effort. It's a great Google Workflow software and is well worth the money!`}
        name={`Repa Mandala`}
        />
        <Features/>
        <div className="heading">
        <div className="head">
        Features
        </div>
        <div className="tittle">
        Everything that your organisation will love, & more.
        </div>
      </div>
      <div className="featureCardContainer">
        <FeacherCard
          src={`https://www.boloforms.com/_next/static/media/pr_agiledeploy.b988c9c8.svg`}
          heading={`Get started in less than 5 minutes.`}
          text={`Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made.`}
          />
        <FeacherCard
          src={`https://www.boloforms.com/_next/static/media/pr_dyncaseroute.02285ff2.svg`}
          heading={`Multi-level workflows`}
          text={`To ensure that your executives do not approve a document until it has been reviewed and accepted by other employees, you can set up multi-level approval processes.`}
          />
        <FeacherCard
          src={`https://www.boloforms.com/_next/static/media/pr_dynbusrules.572419de.svg`}
          heading={`Dynamic Reciepients`}
          text={`Approvers can be selected based on the answers to a form response or entered manually by the requestor.`}
          />
        <FeacherCard
          src={`https://www.boloforms.com/_next/static/media/pr_socialtask.06e17c13.svg`}
          heading={`Role Based Workflows`}
          text={`Assign the following roles to your recipients: Approver, Receive a Copy, and Send Final Email Only.`}
          />
        <FeacherCard
          src={`https://www.boloforms.com/_next/static/media/pr_visualprcdesign.0ff90171.svg`}
          heading={`Conditional Logic`}
          text={`To prevent unnecessary work for approvers, set logic with your approvals to ensure approvers only receive the requests that are relevant to them.`}
          />
        <FeacherCard
          src={`https://www.boloforms.com/_next/static/media/pr_instaaccess.e822dad7.svg`}
          heading={`One-click Approvals`}
          text={`Notification emails are sent to users and can be approved with a single click.`}
          />
        <FeacherCard
          src={`https://www.boloforms.com/_next/static/media/pr_intuserinter.41c7f4bc.svg`}
          heading={`Responsive design`}
          text={`It is designed to be mobile-first, and seamlessly works on desktop and tablet as well.`}
          />
        <FeacherCard
          src={`https://www.boloforms.com/_next/static/media/pr_processoptim.f6216ec3.svg`}
          heading={`Enterprise grade security`}
          text={`Majority of data stored in your spreadsheet. This ensures you have the complete control of your data with end to end encryption.`}
          />
        <FeacherCard
          src={`https://www.boloforms.com/_next/static/media/pr_dashboard.64597267.svg`}
          heading={`Custom Dashboard`}
          text={`Track approvals of various forms from a single place! See the approval process for each request in real-time`}
          />
      </div>
      <Review 
        img={`https://www.boloforms.com/_next/static/media/alaa.a9f02030.jpeg`}
        text={`Boloforms has changed the way my team and I work. We used to have a very inefficient workflow, but Boloforms has streamlined it and allowed us to get our daily tasks done in a fraction of the time. Plus, it's incredibly user friendly and easy to understand. I highly recommend Boloforms for anyone who needs an efficient Google workflow software!`}
        name={`Alaa Khaled`}
        />
        <Features/>
        <Review 
        img={`https://www.boloforms.com/_next/static/media/deepak.e041dab0.jpeg`}
        text={`Easy to use interface and timely support...looking for more features`}
        name={`Deepak S (Solero Corporation)`}
        />
        <Topreview/>
        <WorkFlow/>
        <Review 
        img={`https://www.boloforms.com/_next/static/media/raman.e5477e92.jpeg`}
        text={`I recently started using Boloforms for my Google Forms and it has been an absolute game-changer. The software is intuitive and user friendly, so I was able to set up my forms quickly & easily. It also provides powerful analytics to understand and act on the data collected from my forms in real-time. Overall, it's been a great experience using Boloforms and I highly recommend it!`}
        name={`Raman R`}
        />
        <Features/>
        <Review 
        img={`https://www.boloforms.com/_next/static/media/john.39efe227.jpeg`}
        text={`Customer support is super awesome, Great add on for our team! This helps our task management must easier. I can easily keep track of my member's request and work progress. The approval process is smooth and extremely quick. I highly recommend this addon especially for small business like mine.`}
        name={`John M.`}
        />
        <Cirtification/>
        <div className="supporthead">
          <img src={`https://www.boloforms.com/_next/static/media/stars.6ce54309.png`} alt="" />
          <div className="head">
            <span>Award-winning support</span>
            <span>.</span>
          </div>
          <div className="tittle">
          Best-in-class support. We’re always here to help – here’s how to connect.
          </div>

        </div>
        <div className="suportCardContainer">
          <SupportCard
            img={`https://www.boloforms.com/_next/static/media/live-chat-support.8700dc17.png`}
            head={`? Whatsapp chat`}
            text={`Ask a question right now.`}
            button={`Start a chat`}
            />
          <SupportCard
            img={`https://www.boloforms.com/_next/static/media/support-email.d67bf660.png`}
            head={`? Email`}
            text={`Get in touch by email.`}
            button={`Send an Email`}
            />
          <SupportCard
            img={`https://www.boloforms.com/_next/static/media/helpcenter.1d93444b.png`}
            head={`? Help center`}
            text={`In Depth Guides.`}
            button={`Read articles`}
            />
          <SupportCard
            img={`https://www.boloforms.com/_next/static/media/book-time.934f28c8.png`}
            head={`? Google Meet`}
            text={`Guided support and Q&A.`}
            button={`Book a time`}
            />
        </div>
        <Faq/>
        <div className="trusthead">
          <div className="headwithLo">
            <span>
            Customers Who Are Trusting Us!
            </span>
            <Favorite className='iconLove'/>
          </div>
          <div className="tittle">
          Customers’ Testimonials
          </div>
        </div>
        <div className="trustContainer">
          <img className='trust' src={`https://www.boloforms.com/_next/static/media/timer_reviews.c0a05474.svg`} alt="" />

        </div>
        <Footer/>
    </div>
  )
}
