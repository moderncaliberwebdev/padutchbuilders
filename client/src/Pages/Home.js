import React, { useState, useEffect } from 'react'

import '../css/Home.css'

import ShowcaseProduct from '../Components/ShowcaseProduct'
import Footer from '../Components/Footer'

function Home() {
  const [showcase, setShowcase] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  const [currentShowcase, setCurrentShowcase] = useState('')

  const changeCarousel = (item) => {
    const showcaseElements = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]
    showcaseElements[item] = true
    setShowcase(showcaseElements)
    setCurrentShowcase(item)
  }

  useEffect(() => {
    changeCarousel(0)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (currentShowcase != 7) {
        changeCarousel(currentShowcase + 1)
      } else changeCarousel(0)
    }, 8000)
  })

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
          <span
            className='showcase__list-item item0'
            onClick={() => changeCarousel(0)}
            style={{
              backgroundColor: currentShowcase == 0 && '#444F66',
              color: currentShowcase == 0 && '#fff',
            }}
          >
            4x4 Monster Truck with Slide
          </span>
          <span
            className='showcase__list-item item1'
            onClick={() => changeCarousel(1)}
            style={{
              backgroundColor: currentShowcase == 1 && '#444F66',
              color: currentShowcase == 1 && '#fff',
            }}
          >
            Goat Barn and Chicken Coop
          </span>
          <span
            className='showcase__list-item item2'
            onClick={() => changeCarousel(2)}
            style={{
              backgroundColor: currentShowcase == 2 && '#444F66',
              color: currentShowcase == 2 && '#fff',
            }}
          >
            4x6 Quaker Chicken Coop
          </span>
          <span
            className='showcase__list-item item3'
            onClick={() => changeCarousel(3)}
            style={{
              backgroundColor: currentShowcase == 3 && '#444F66',
              color: currentShowcase == 3 && '#fff',
            }}
          >
            4x6 Chicken Coop
          </span>
          <span
            className='showcase__list-item item4'
            onClick={() => changeCarousel(4)}
            style={{
              backgroundColor: currentShowcase == 4 && '#444F66',
              color: currentShowcase == 4 && '#fff',
            }}
          >
            Chicken Barn Wagon on Wheels
          </span>
          <span
            className='showcase__list-item item5'
            onClick={() => changeCarousel(5)}
            style={{
              backgroundColor: currentShowcase == 5 && '#444F66',
              color: currentShowcase == 5 && '#fff',
            }}
          >
            Self Dumping Hoppers
          </span>
          <span
            className='showcase__list-item item6'
            onClick={() => changeCarousel(6)}
            style={{
              backgroundColor: currentShowcase == 6 && '#444F66',
              color: currentShowcase == 6 && '#fff',
            }}
          >
            Chicken Barn House on Wheels
          </span>
          <span
            className='showcase__list-item item7'
            onClick={() => changeCarousel(7)}
            style={{
              backgroundColor: currentShowcase == 7 && '#444F66',
              color: currentShowcase == 7 && '#fff',
            }}
          >
            Happy Hideout Swingset
          </span>
        </div>
        <ShowcaseProduct
          image='/public/images/QHWMonsterT175.png'
          title='4x4 Monster Truck with Slide'
          price='$2,100.00 Plus S&H'
          show={showcase[0]}
        />
        <ShowcaseProduct
          image='/public/images/SCCGC175.png'
          title='Goat Barn and Chicken Coop'
          show={showcase[1]}
        />
        <ShowcaseProduct
          image='/public/images/SCC5175.png'
          title='4x6 Quaker Chicken Coop'
          price='$1,495.00 Plus S&H '
          show={showcase[2]}
        />
        <ShowcaseProduct
          image='/public/images/ChickenCoopPenRedo175.png'
          title='4x6 Chicken Coop'
          price='$1094.99 Plus S&H'
          show={showcase[3]}
        />
        <ShowcaseProduct
          image='/public/images/PBChickBarn812175.png'
          title='Chicken Barn Wagon on Wheels'
          price='$4,595.99 Plus S&H '
          show={showcase[4]}
        />
        <ShowcaseProduct
          image='/public/images/CWHoppers2175.png'
          title='Self Dumping Hoppers'
          show={showcase[5]}
        />
        <ShowcaseProduct
          image='/public/images/ChickenWagononwheels175.png'
          title='Chicken Barn House on Wheels'
          price='$4,795.99 Plus S&H '
          show={showcase[6]}
        />
        <ShowcaseProduct
          image='/public/images/happyhideout1751.png'
          title='Happy Hideout Swingset'
          price='$4,000.00'
          show={showcase[7]}
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
      <div className='home__aboutamish'>
        <h2 className='aboutamish__title'>A Little About the Amish</h2>
        <p className='aboutamish__subtitle'>
          Welcome, we have been working with the Amish for over 23 years.
        </p>
        <p className='aboutamish__para'>
          The farmlands of the Pennsylvania Dutch Country are among the most
          productive in the nation. But many of the farmers here are different
          from most Americans; different by choice. For these are the Old Order
          Amish and Mennonites, also known as the "Plain People". <br />
          <br />
          Our Amish neighbors have been employing horse-drawn power since the
          days when horsepower had a whole different meaning! In comparison to
          our fast-paced society, the simpler, family-centered Amish way of life
          holds a special fascination. <br />
          <br />
          These people trace their heritage back hundreds of years, and yet,
          despite all the time that has passed and the many changes that have
          taken place in society, they still live and work much as their
          forefathers did. Their families and their farms are their top
          priorities, second only to God. <br />
          <br />
          The Amish are very devout in their faith. They believe in the literal
          interpretation and application of Scripture as the Word of God. They
          take seriously the Biblical commands to separate themselves from the
          things of the world. They believe worldliness can keep them from being
          close to God, and can introduce influences that could be destructive
          to their communities and to their way of life. <br />
          <br />
          Today there are over 25 different Amish, Mennonite, and Brethren
          church groups in Lancaster County, all holding to slightly different
          traditions and their own interpretations of the Bible. The more
          traditional groups are called 'old order'. They do not permit
          electricity or telephones in their homes. By restricting access to
          television, radio, and telephones, the Amish are better able to keep
          the modern world from intruding into their home life. <br />
          <br />
          The Amish have long preferred farming as a way of life. They feel
          their lifestyle and their families can best be maintained in a rural
          environment. While they do not permit the use of tractors in their
          fields, these old order Amish groups do use modern farm equipment
          pulled by teams of horses or mules. Many of the Amish are also expert
          wood workers and have had their craft passed down form generations of
          craftsmen. <br />
          <br />
          These traditional groups wear plain clothing styles, which has earned
          them the name "Plain People". It is the simple, peaceful lifestyle of
          these plain people that attracts such a curiosity today. Many wonder
          how these people can survive in their supposedly backward ways. Well,
          they're not only surviving - they're thriving. Since 1960, the Amish
          population in Lancaster County has almost tripled.
        </p>
        <img
          className='aboutamish__banner'
          src='/public/images/aboutamishimg.png'
          alt='About the Amish Banner'
        />
        <h2 className='aboutamish__cta'>
          ...let our connection be your connection!
        </h2>
      </div>
      <Footer />
    </div>
  )
}

export default Home