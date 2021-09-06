import React from 'react'

import '../css/Home.css'

import ShowcaseProduct from '../Components/ShowcaseProduct'

function Home() {
  return (
    <div className='home'>
      <img src='/public/images/logo.png' alt='Logo' className='home__logo' />
      <nav className='home__nav'>
        <span>
          <a href='/'>HOME</a>
        </span>
        <span>
          <a href='/products'>PRODUCTS</a>
        </span>
        <span>
          <a href='/whoweare'>WHO WE ARE...</a>
        </span>
        <span>
          <a href='/whatwedo'>WHAT WE DO...</a>
        </span>
        <span>
          <a href='/contact'>CONTACT INFO</a>
        </span>
        <span>
          <a href='/terms'>TERMS AND CONDITIONS</a>
        </span>
      </nav>
      <img
        src='/public/images/banner.png'
        alt='Horse and Buggy Banner'
        className='home__banner'
      />
      <div className='home__hat-container'>
        <img src='/public/images/hat1.png' alt='Hat 1' className='hat' />
        <img src='/public/images/hat2.png' alt='Hat 2' className='hat' />
        <img src='/public/images/hat3.png' alt='Hat 3' className='hat' />
        <img src='/public/images/hat4.png' alt='Hat 4' className='hat' />
        <img src='/public/images/hat5.png' alt='Hat 5' className='hat' />
        <img src='/public/images/hat6.png' alt='Hat 6' className='hat' />
        <img src='/public/images/hat7.png' alt='Hat 7' className='hat' />
        <img src='/public/images/hat8.png' alt='Hat 8' className='hat' />
      </div>
      <h2 className='showcase__title'>Featured Showcase</h2>
      <div className='home__showcase'>
        <div className='showcase__product-list'>
          <span className='showcase__list-item'>
            4x4 Monster Truck with Slide
          </span>
          <span className='showcase__list-item'>
            Goat Barn and Chicken Coop
          </span>
          <span className='showcase__list-item'>4x6 Quaker Chicken Coop</span>
          <span className='showcase__list-item'>4x6 Chicken Coop</span>
          <span className='showcase__list-item'>
            Chicken Barn Wagon on Wheels
          </span>
          <span className='showcase__list-item'>Self Dumping Hoppers</span>
          <span className='showcase__list-item'>
            Chicken Barn House on Wheels
          </span>
          <span className='showcase__list-item'>Happy Hideout Swingset</span>
        </div>
        <ShowcaseProduct
          image='/public/images/QHWMonsterT175.png'
          title='4x4 Monster Truck with Slide'
          price='$2,100.00 Plus S&H'
        />
      </div>
      <div className='home__services'>
        <div className='services__servicebox'>
          <img
            className='servicebox__img'
            src='/public/images/contract.png'
            alt='Contract'
          />
          <h4 className='servicebox__title'>
            Post Your Contracting Job for Bids
          </h4>
        </div>
        <div className='services__servicebox'>
          <img
            className='servicebox__img'
            src='/public/images/auction.png'
            alt='Auctions'
          />
          <h4 className='servicebox__title'>Visit Our PA Dutch Auctions</h4>
        </div>
        <div className='services__servicebox'>
          <img
            className='servicebox__img'
            src='/public/images/catalog.png'
            alt='Catalog'
          />
          <h4 className='servicebox__title'>See Our Virtual Catalogs</h4>
        </div>
        <div className='services__servicebox'>
          <img
            className='servicebox__img'
            src='/public/images/calendar.png'
            alt='Calendar'
          />
          <h4 className='servicebox__title'>
            Schedule a Tour of a PA Dutch Farm
          </h4>
        </div>
      </div>
      <div className='interested__cont'>
        <h2 className='interested__title'>Interested?</h2>
        <p className='interested__info'>
          Contact us about any of the products you see!
        </p>
        <div className='interested__contact'>
          <p className='interested__number'>717-488-8005</p>
          <p className='interested__or'>or</p>
          <p className='interested__email'>Sales@padutchbuilders.com</p>
        </div>
      </div>
    </div>
  )
}

export default Home
