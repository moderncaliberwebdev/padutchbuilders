import React, { useEffect, useState } from 'react'
import axios from 'axios'

import '../css/ProductList.css'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Product from '../Components/Product'

function ProductList({ title, subtitle, prodType, urlPath }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchMyAPI() {
      const { data } = await axios.get(`/api/products?prodtype=${prodType}`)
      setProducts(data)
    }

    fetchMyAPI()
  }, [])

  return (
    <div className='productlist'>
      <Header />
      <h1 className='productlist__title'>{title}</h1>
      <span className='productlist__subtitle'>{subtitle}</span>
      <div className='productlist__container'>
        {products.map((product) => (
          <Product
            image={product.images[0]}
            title={product.title}
            price={product.price == 'N/A' ? '' : product.price}
            link={`/products/${urlPath}/${product._id}`}
            key={product.title}
          />
        ))}
      </div>
      <Footer marginLeft={0} marginBottom={-20} />
    </div>
  )
}

export default ProductList
