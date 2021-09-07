import React from 'react'

import '../css/ShowcaseProduct.css'

function ShowcaseProduct({ image, title, price, show }) {
  return (
    <div
      className='showcaseproduct'
      style={{ display: show ? 'flex' : 'none' }}
    >
      <div className='showcaseproduct__img-cont'>
        <img
          className='showcaseproduct__img'
          src={image}
          alt='Showcase Product Image'
        />
        <p className='showcaseproduct__readmore'>Read More...</p>
      </div>
      <div className='showcaseproduct__info-cont'>
        <h3 className='info__title'>{title}</h3>
        <p
          className='info__price'
          style={{ display: price ? 'block' : 'none' }}
        >
          {price}
        </p>
        <p className='info__interested'>Interested?</p>
        <button className='info__sales'>Email Sales</button>
      </div>
    </div>
  )
}

export default ShowcaseProduct
