import React from 'react'

import '../css/Contact.css'

import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <div className='contact'>
      <Header />
      <h1 className='contact__title'>
        Sales at PA Dutch Builders<p className='footer__r'>®</p>, LLC
      </h1>
      <div className='contact__box'>
        <div className='box__item'>
          <img src='' alt='PO Box' className='box__item-img' />
          <p className='box__item-text'>
            P.O. Box 264
            <br />
            Bowmansville
            <br />
            Pennsylvania
            <br />
            17507
          </p>
        </div>
        <div className='box__item'>
          <img src='' alt='Email' className='box__item-img' />
          <p className='box__item-text'>sales@padutchbuilders.com</p>
        </div>
        <div className='box__item'>
          <img src='' alt='Phone Number' className='box__item-img' />
          <p className='box__item-text'>717-488-8005</p>
        </div>
        <div className='box__item'>
          <img src='' alt='Fax' className='box__item-img' />
          <p className='box__item-text'>717-445-6492 (Fax)</p>
        </div>
      </div>

      <h1 className='contact__title'>Contact </h1>
      <div className='contact__box'>
        <span className='box__subtitle'>
          Please be sure to include which product you are interested in when
          contacting us.
          <br />
          FILL OUT THIS SHORT FORM AND A REPRESENTATIVE WILL CONTACT YOU.
        </span>
        <form className='box__form'>
          <input type='text' className='form__textbox' placeholder='Name' />
          <input type='text' className='form__textbox' placeholder='Email' />
          <input type='text' className='form__textbox' placeholder='Subject' />
          <input type='text' className='form__message' placeholder='Message' />
          <input type='submit' className='form__submit' value='Send' />
        </form>
      </div>
      <Footer marginLeft={0} marginBottom={0} />
    </div>
  )
}

export default Contact
