import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'

import '../css/ProductList.css'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Product from '../Components/Product'

function ProductList({ title, subtitle, prodType }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchMyAPI() {
      const { data } = await axios.get(`/api/products?prodtype=${prodType}`)
      setProducts(data)
    }
    fetchMyAPI()
  }, [])

  return (
    <div className="fullpage">

    <div className='productlist content'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <h1 className='productlist__title'>{title}</h1>
      {subtitle && <span className='productlist__subtitle'>{subtitle}</span>}
      <div className='productlist__container'>
        {products.map((product) => (
          <Product
            image={product.images[0]}
            title={product.title}
            price={product.price == 'N/A' ? '' : product.price}
            link={`/products/${
              product.prodType == 'Shed'
                ? 'sheds'
                : product.prodType == 'Gazebo'
                ? 'gazebos'
                : product.prodType == 'Poolhouses'
                ? 'poolhouses'
                : product.prodType == 'Pet Structures'
                ? 'petstructures'
                : product.prodType == 'Roofing'
                ? 'roofing'
                : product.prodType == 'Decks'
                ? 'decks'
                : product.prodType == 'Swingsets'
                ? 'swingsets'
                : product.prodType == 'Industrial Equipment' &&
                  'industrialequipment'
            }/${product._id}`}
            key={product.title}
            brochure={product.brochure}
            video={product.video}
          />
        ))}
      </div>
    </div>
      <Footer marginLeft={0} marginBottom={-20} />
    </div>
  )
}

export default ProductList
