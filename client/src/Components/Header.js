import React from 'react'

import '../css/Header.css'

function Header() {
  return (
    <div className='bodyHeader'>
      <div className='home__headertop'>
        <a href='/'>
          <img
            src='/public/images/logo.png'
            alt='Logo'
            className='home__logo'
          />
        </a>
        <div className='home__amishphotos'>
          <img
            src='/public/images/header/amish-builder.png'
            alt='Amish Post'
            className='amishphotos__item size7'
          />
          <img
            src='/public/images/header/amish-carrying.png'
            alt='Amish Post'
            className='amishphotos__item size6'
          />
          <img
            src='/public/images/header/amish-construction.png'
            alt='Amish Post'
            className='amishphotos__item size5'
          />
          <img
            src='/public/images/header/amish-ladder.png'
            alt='Amish Post'
            className='amishphotos__item size4'
          />
          <img
            src='/public/images/header/amish-measure.png'
            alt='Amish Post'
            className='amishphotos__item size3'
          />
          <img
            src='/public/images/header/amish-post.png'
            alt='Amish Post'
            className='amishphotos__item size2'
          />
          <img
            src='/public/images/header/amish-roofing.png'
            alt='Amish Post'
            className='amishphotos__item size1'
          />
        </div>
        <div className='home__amishman'>
          <img
            src='/public/images/header_amishman.png'
            alt='Dealers Welcome'
            className='amishman__image'
          />
          <img
            src='/public/images/number.png'
            alt='Phone Number'
            className='amishman__number'
          />
          {/* <span className='amishman__number'>717-488-8005</span> */}
          <span className='amishman__dealers'>• DEALERS WELCOME •</span>
        </div>
        <img
          src='/public/images/menu.png'
          alt='Menu'
          className='home__menu'
          onClick={() => {
            document.querySelector('.home__nav-menu').style.display = 'block'
            document.querySelector('.home__nav').style.width = '100vw'
          }}
        />
      </div>
      <nav className='home__nav'>
        <img
          src='/public/images/menu-white.png'
          alt='Menu'
          className='home__nav-menu'
          onClick={() => {
            document.querySelector('.home__nav-menu').style.display = 'none'
            document.querySelector('.home__nav').style.width = '0'
          }}
        />
        <span>
          <a href='/' className='nav__item first'>
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
    </div>
  )
}

export default Header
