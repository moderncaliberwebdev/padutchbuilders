import React from 'react'

import '../css/Catalogs.css'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CatalogItem from '../Components/CatalogItem'

function Catalogs() {
  return (
    <div className='catalogs'>
      <Header />

      <h1 className='catalogs__title'>Virtual Catalogs</h1>
      <span className='catalogs__subtitle'>
        PA Dutch Builders, LLC offers these Premium Collections to our
        customers. Click on any image below to see each of our virtual catalogs.
      </span>
      <div className='catalogs__items'>
        <CatalogItem
          title={'Premium Playhouses'}
          imgsrc={'/public/images/playhousescatalog.png'}
          linkto={'/catalogs/homesweet'}
        />
        <CatalogItem
          title={'The Condor Collection'}
          imgsrc={'/public/images/condorcatalog.png'}
          linkto={'/catalogs/condor'}
        />
        <CatalogItem
          title={'The Eagle Collection'}
          imgsrc={'/public/images/eaglecatalog.png'}
          linkto={'/catalogs/eagle'}
        />
        <CatalogItem
          title={'Custom Gazebos'}
          imgsrc={'/public/images/gazeboscatalog.png'}
          linkto={'/catalogs/gazebo'}
        />
        <CatalogItem
          title={'Swingsets, Play Structures'}
          imgsrc={'/public/images/playsetscatalog.png'}
          linkto={'/catalogs/swingset'}
        />
        <CatalogItem
          title={'Wooden Playground Equipment'}
          imgsrc={'/public/images/playgroundcatalog.png'}
          linkto={'/catalogs/playground'}
        />
        <CatalogItem
          title={'Custom Horse Structures'}
          imgsrc={'/public/images/stallscatalog.png'}
          linkto={'/catalogs/horsestall'}
        />
      </div>
      <Footer marginLeft={20} marginBottom={-20} />
    </div>
  )
}

export default Catalogs
