import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import '../css/Home.css'

import ShowcaseProduct from '../Components/ShowcaseProduct'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Error() {
  function useInterval(callback, delay) {
    const savedCallback = useRef()

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current()
      }
      if (delay !== null) {
        let id = setInterval(tick, delay)
        return () => clearInterval(id)
      }
    }, [delay])
  }

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

  const [currentShowcase, setCurrentShowcase] = useState(0)

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
    setCurrentShowcase(Number(item))
  }

  useEffect(() => {
    changeCarousel(0)
  }, [])

  useInterval(() => {
    const showcaseElements = showcase
    const currentItem = showcaseElements.indexOf(true) + 1
    if (currentItem != 8) {
      changeCarousel(currentItem)
    } else changeCarousel(0)
  }, 8000)

  return (
    <div className='home'>
      <Helmet>
        <title>Page Not Found - PA Dutch Builders | Amish Builders</title>
      </Helmet>
      <Header />
      <img
        src='/public/images/banner.png'
        alt='Horse and Buggy Banner'
        className='home__banner'
      />
      <div className='interested__cont'>
        <h2 className='interested__title'>404 - Page Not Found</h2>
        <p className='interested__info'>Go to another page!</p>
      </div>
      <Footer />
    </div>
  )
}

export default Error
