import React from 'react'

import '../css/WhoWeAre.css'

import Header from '../Components/Header'
import Footer from '../Components/Footer'

function WhoWeAre() {
  return (
    <div className='whoweare'>
      <Header />
      <div className='whoweare__body'>
        <h2 className='body__title'>Who We Are</h2>
        <span className='body__date'>08 February 2011</span>
        <p className='body__text'>
          We are a Lancaster County Business with over 23 years experience
          working with the plain community. Our relationship with our neighbors
          is based on years of understanding, trust and respect for each others
          way of life. We make friends in the community all the time and try to
          learn from each other. Often we get questions from people that are
          curious about life here in Lancaster County. We understand the
          curiosity and interest in the Lancaster, PA way of life and enjoy
          sharing our experiences. We believe everyone working together in this
          country can accomplish anything. We hope to impress upon you the best
          work ethics and values our local craftsman have to offer.
        </p>
        <span className='body__thanks'>
          Thank you for your interest in PA Dutch Builders ®, LLC.
        </span>
      </div>
      <Footer marginBottom={0} />
    </div>
  )
}

export default WhoWeAre