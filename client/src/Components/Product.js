import React from 'react'

import '../css/Product.css'

function Product({ image, title, price, link }) {
  return (
    <div className='product'>
      <a href={link} className='product__image-wrapper'>
        <img src={image} alt={title} className='product__image' />
      </a>
      <a href={link} className='product__readmore-wrapper'>
        <p className='product__readmore'>Read more...</p>
      </a>
      <h3 className='product__title'>
        <a href={link}>{title}</a>
      </h3>
      <span className='product__price'>{price}</span>
      <span className='product__interested'>Interested?</span>
      <button className='product__sales'>Email Sales</button>
    </div>
  )
}

export default Product
