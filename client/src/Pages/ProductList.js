import React, { useEffect } from 'react'
import axios from 'axios'

import '../css/ProductList.css'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Product from '../Components/Product'

function ProductList() {
  const products = [
    {
      title: 'All Types of Concrete Slabs',
      price: '$2,100.00 Plus S&H',
      image: '/public/images/products/sheds/concreteslab.png',
    },
  ]

  //   useEffect(() => {
  //     async function fetchMyAPI() {
  //       const { data } = await axios.post(`/api/products`)
  //     }

  //     fetchMyAPI()
  //   }, [])

  return (
    <div className='productlist'>
      <Header />
      <div className='productlist__container'>
        {products.map((product) => (
          <Product
            image={product.image}
            title={product.title}
            price={product.price}
            link={'/'}
            key={product.title}
          />
        ))}
      </div>
      <Footer marginLeft={0} marginBottom={-20} />
    </div>
  )
}

export default ProductList
