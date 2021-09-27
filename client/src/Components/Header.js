import React from 'react'

import '../css/Header.css'

function Header() {
  return (
    <>
      <img src='/public/images/logo.png' alt='Logo' className='home__logo' />
      <nav className='home__nav'>
        <span>
          <a href='/' className='nav__item'>
            HOME
          </a>
        </span>
        <span className='dropdown'>
          <p className='nav__item'>PRODUCTS</p>
          <div className='home__dropdown'>
            <a href='/sheds'>Sheds, Custom Sheds, Garages</a>
            <a href='/gazebos'>Gazebos, Pergolas, Pavilions</a>
            <a href='/poolhouses'>Pool Houses, Playhouses, Cabins</a>
            <a href='/petstructures'>
              Pet Structures, Horse Barns, Custom Barns
            </a>
            <a href='/roofing'>Roofing, Siding, and Amish Contractors</a>
            <a href='/decks'>Decks, Porches, Fencing</a>
            <a href='/swingsets'>Swingsets, Play Structures Fireplaces</a>
            <a href='/industrialequipment'>
              Industrial Equipment, Buggies and Wagons
            </a>
            <a href='/allproducts'>Complete Product Listing</a>
            <a href='/catalogs'>VIRTUAL CATALOGS</a>
            <a href='/catalogs/homesweet' className='catalogsub'>
              Home-Sweet-Homes Playhouses
            </a>
            <a href='/catalogs/condor' className='catalogsub'>
              The Condor Collection
            </a>
            <a href='/catalogs/eagle' className='catalogsub'>
              The Eagle Collection
            </a>
            <a href='/catalogs/gazebo' className='catalogsub'>
              Gazebos
            </a>
            <a href='/catalogs/swingset' className='catalogsub'>
              Swingsets and Play Structures
            </a>
            <a href='/catalogs/playground' className='catalogsub'>
              Wooden Playground Equipment
            </a>
            <a href='/catalogs/horsestall' className='catalogsub'>
              Custom Horse Stalls
            </a>
          </div>
        </span>
        <span>
          <a href='/whoweare' className='nav__item'>
            WHO WE ARE...
          </a>
        </span>
        <span>
          <a href='/whatwedo' className='nav__item'>
            WHAT WE DO...
          </a>
        </span>
        <span>
          <a href='/contact' className='nav__item'>
            CONTACT INFO
          </a>
        </span>
        <span>
          <a href='/terms' className='nav__item'>
            TERMS AND CONDITIONS
          </a>
        </span>
      </nav>
    </>
  )
}

export default Header
