import React from 'react'

import '../css/Footer.css'

function Footer({ marginBottom }) {
  return (
    <footer
      className='footer'
      style={{
        marginBottom: `${marginBottom}rem`,
      }}
    >
      <span className='footer__text'>
        © 2021 PA Dutch Builders<p className='footer__r'>®</p>, LLC | hosted by
        Destefano Enterprises, LLC
      </span>
      <span className='footer__text'>
        PA Dutch Builders<p className='footer__r'>®</p> is a registered mark of
        the US patent and trademark office, all rights reserved.
      </span>
    </footer>
  )
}

export default Footer
