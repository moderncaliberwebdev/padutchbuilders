import React from 'react'

import Header from '../Components/Header'
import Footer from '../Components/Footer'

function WhatWeDo() {
  return (
    <div className='whoweare'>
      <Header />
      <div className='whoweare__body'>
        <h2 className='body__title'>What We Do</h2>
        <span className='body__date'>08 February 2011</span>
        <p className='body__text'>
          We are dedicated in bringing to you some of the hardest working
          craftsmen in the USA. Whether your looking for a small shed or a large
          building, we have years of experience knowing who will be right for
          the job. You can rest assure the products you see on our site are
          built by experienced and dedicated craftsmen from our plain community
          right here in Lancaster County and surrounding areas.
        </p>
        <p className='body__text'>
          Everyone we work with have proven themselves to be the best in their
          field, both in quality and value. Our business is a unique one and we
          believe necessary for the industry and the economy. This web site and
          our team is the only place we know where you can get connections that
          would normally be impossible. Avoid wasting your time and money on
          expensive unrelated salesmen that will take half of your money before
          anyone even picks up a 2 X 4.
        </p>
        <p className='body__text'>
          You will find working with us and having a more direct connection an
          efficient use of your time and money. We are also always here to make
          sure your experience with our teams is a pleasant and enjoyable one
          for everybody. We look to be here for you long term and keep you
          coming back to us for all your building needs. Pa Dutch Builders is
          like having an Uncle Amos in the business. We understand the language
          and bridge the gap of communication.
        </p>
        <p className='body__text'>
          We love custom projects. If you have a custom idea in mind and want to
          see your creation built to your satisfaction. We will be happy to make
          that happen for you by one of our craftsmen. We love speciality work
          and find it challenging. Put our skills to work for you today.
        </p>
        <p className='body__text'>
          If your looking for hardworking people that take pride in their work
          you have come to the right place. Let us help you get started building
          a relationship today with people you can trust. Give us a call or
          email today and we won't let you down.
        </p>
      </div>
      <Footer marginLeft={0} marginBottom={0} />
    </div>
  )
}

export default WhatWeDo
