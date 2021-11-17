import React, { useState } from 'react'

import YoutubeEmbed from './YoutubeEmbed'

import '../css/Product.css'

function Product({ image, title, price, link, brochure, video }) {
  const brochureUrls = {
    Condor: '/catalogs/condor',
    Eagle: '/catalogs/eagle',
    Homesweet: '/catalogs/homesweet',
    Gazebo: '/catalogs/gazebo',
    Swingset: '/catalogs/swingset',
    Playground: '/catalogs/playground',
    Horsestall: '/catalogs/horsestall',
  }

  const [displayYT, setDisplayYT] = useState(false)

  const setDisplayProp = (bool) => {
    setDisplayYT(bool)
  }

  return (
    <div className='product'>
      <a href={link} className='product__image-wrapper'>
        <img src={image} alt={title} className='product__image' />
      </a>
      <h3 className='product__title'>
        <a href={link}>{title}</a>
      </h3>
      <a href={link} className='product__readmore-wrapper'>
        <p className='product__readmore'>Read More</p>
      </a>
      <span className='product__price'>{price}</span>
      <div className='product__interested-cont'>
        <span className='product__interested'>Interested?</span>
        {brochure && (
          <div className='product__brochure'>
            <span className='brochure__bar'>|</span>
            <a className='brochure__button' href={brochureUrls[brochure]}>
              View Brochure
            </a>
          </div>
        )}
        {video && (
          <>
            <div className='product__brochure'>
              <span className='brochure__bar'>|</span>
              <a className='brochure__button'  target='_blank' onClick={() => setDisplayProp(true)}>
                View Video
              </a>
            </div>
              <YoutubeEmbed embedId='c08uR0bPQlM' display={displayYT} setDisplayProp={setDisplayProp}/>
          </>
        )}
      </div>
      <button
        className='product__sales'
        onClick={() =>
          (window.location.href = 'mailto:sales@padutchbuilders.com')
        }
      >
        Email Sales
      </button>
    </div>
  )
}

export default Product
