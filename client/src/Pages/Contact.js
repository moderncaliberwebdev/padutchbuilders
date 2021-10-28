import React from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'

import '../css/Contact.css'

import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Contact() {
  const formSubmit = () => {
    const name = document.getElementById('input-name')
    const email = document.getElementById('input-email')
    const subject = document.getElementById('input-subject')
    const themessage = document.getElementById('themessage')
    const message = document.getElementById('input-message')
    const formResponse = document.getElementById('contact__form-res')
    const inputs = [name, email, subject, message]

    if (themessage.value == '') {
      formResponse.textContent = 'Sending...'
      axios
        .get(
          //use /api for dev and take it away for prod
          `/api/email?name=${name.value}&email=${email.value}&subject=${subject.value}&message=${message.value}`
        )
        .then((res) => {
          const data = res.data
          if (data.formResponse) {
            formResponse.textContent = data.formResponse
          } else {
            formResponse.textContent = 'Message Sent'
            inputs.forEach((input) => {
              input.value = ''
            })
          }
        })
    }
  }
  return (
    <div className='contact'>
      <Helmet>
        <title>Contact Info</title>
      </Helmet>
      <Header />
      <h1 className='contact__title'>
        Sales at PA Dutch Builders<p className='contact__r'>®</p>, LLC
      </h1>
      <div className='contact__box'>
        <div className='box__item'>
          <img
            src='/public/images/pobox.png'
            alt='PO Box'
            className='box__item-img'
          />
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
          <img
            src='/public/images/email.png'
            alt='Email'
            className='box__item-img'
          />
          <p
            className='box__item-text email'
            onClick={() =>
              (window.location.href = 'mailto:sales@padutchbuilders.com')
            }
          >
            sales@padutchbuilders.com
          </p>
        </div>
        <div className='box__item'>
          <img
            src='/public/images/phone.png'
            alt='Phone Number'
            className='box__item-img'
          />
          <p className='box__item-text'>717-488-8005</p>
        </div>
        <div className='box__item'>
          <img
            src='/public/images/fax.png'
            alt='Fax'
            className='box__item-img'
          />
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
        <div className='box__form'>
          <input
            type='text'
            className='form__textbox'
            placeholder='Name'
            id='input-name'
          />
          <input
            type='text'
            className='form__textbox'
            placeholder='Email'
            id='input-email'
          />
          <input
            type='text'
            className='form__textbox'
            placeholder='Subject'
            id='input-subject'
          />
          <textarea
            className='form__message'
            placeholder='Message'
            id='themessage'
          ></textarea>
          <textarea
            className='form__message'
            placeholder='Message'
            id='input-message'
          ></textarea>
          <input
            type='submit'
            className='form__submit'
            value='Send'
            onClick={() => formSubmit()}
          />
          <p id='contact__form-res'></p>
        </div>
      </div>
      <Footer marginLeft={0} marginBottom={-20} />
    </div>
  )
}

export default Contact
