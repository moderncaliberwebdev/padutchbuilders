import React, { useEffect, useState } from 'react'
import axios from 'axios'

import '../css/ProductPage.css'

import Header from '../Components/Header'
import Footer from '../Components/Footer'

function ProductPage({ match }) {
  const productId = match.params.productid

  const [product, setProduct] = useState([])

  useEffect(() => {
    async function fetchMyAPI() {
      const { data } = await axios.get(`/api/product?productid=${productId}`)
      setProduct(data[0])
    }
    fetchMyAPI()
  }, [])

  return (
    <div className='productpage'>
      <Header />
      <h1 className='productpage__title'>{product.title}</h1>
      <div className='productpage__image-container'>
        {product.images &&
          product.images.map((prodsrc) => (
            <img
              src={prodsrc}
              alt='Product Image'
              key={prodsrc}
              className='image-container__image'
            />
          ))}
      </div>
      <div className='productpage__details'>
        <h2 className='details__title'>Details</h2>
        {product.details &&
          product.details.map((detail) => (
            <span className='details__detail' key={detail}>
              {detail}
            </span>
          ))}
      </div>
      <div className='productpage__extrainfo'>
        {product.extraDetails && (
          <h1 className='extrainfo__title'>Extra Doors & Windows</h1>
        )}
      </div>
      <div className='productpage__info'>
        <h2 className='info__title'>Get More Info</h2>
        <span className='info__span'>Telephone us at: (717) 488-8005</span>
        <button
          className='info__sales'
          onClick={() =>
            (window.location.href = 'mailto:sales@padutchbuilders.com')
          }
        >
          Email Sales
        </button>
      </div>
      <Footer marginLeft={0} marginBottom={-20} />
    </div>
  )
}

export default ProductPage
