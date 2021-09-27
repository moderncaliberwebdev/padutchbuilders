import React from 'react'

import '../css/CatalogItem.css'

function CatalogItem({ title, imgsrc, linkto }) {
  return (
    <a href={linkto} className='catalogitem'>
      <h2 className='catalogitem__title'>{title}</h2>
      <img src={imgsrc} alt='Catalog Item' className='catalogitem__img' />
    </a>
  )
}

export default CatalogItem
