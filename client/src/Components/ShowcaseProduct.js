import React from 'react'
import { useMediaQuery } from 'react-responsive'

import '../css/ShowcaseProduct.css'

function ShowcaseProduct({ image, title, price, show, pageUrl }) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
  return (
    <div
      className='showcaseproduct'
      style={{ display: isTabletOrMobile ? 'flex' : show ? 'flex' : 'none' }}
    >
      <a className='showcaseproduct__img-cont' href={pageUrl}>
        <img
          className='showcaseproduct__img'
          src={image}
          alt='Showcase Product Image'
        />
        <p className='showcaseproduct__readmore'>Read More...</p>
      </a>
      <div className='showcaseproduct__info-cont'>
        <a href={pageUrl}>
          <h3 className='info__title'>{title}</h3>
        </a>
        <p
          className='info__price'
          style={{ display: price ? 'block' : 'none' }}
        >
          {price}
        </p>
        <p className='info__interested'>Interested?</p>
        <button
          className='info__sales'
          onClick={() =>
            (window.location.href = 'mailto:sales@padutchbuilders.com')
          }
        >
          Email Sales
        </button>
      </div>
    </div>
  )
}

export default ShowcaseProduct
