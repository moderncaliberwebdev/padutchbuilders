import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import 'regenerator-runtime/runtime.js'

import '../css/App.css'

// import { actions } from '../store'
import Home from '../Pages/Home'
import WhoWeAre from '../Pages/WhoWeAre'
import WhatWeDo from '../Pages/WhatWeDo'
import Terms from '../Pages/Terms'
import Contact from '../Pages/Contact'
import Catalogs from '../Pages/Catalogs'
import CatalogPage from '../Pages/CatalogPage'
import ProductList from '../Pages/ProductList'

function App() {
  // const dispatch = useDispatch()

  // const action = useSelector((state) => state.action)
  // const { title } = action

  // useEffect(() => {
  //   dispatch(actions())
  // }, [dispatch])

  return (
    <Router>
      <Switch>
        <Route path='/whoweare' component={WhoWeAre} exact />
        <Route path='/whatwedo' component={WhatWeDo} exact />
        <Route path='/terms' component={Terms} exact />
        <Route path='/contact' component={Contact} exact />
        <Route path='/catalogs' component={Catalogs} exact />
        <Route path='/catalogs/homesweet' exact>
          <CatalogPage
            title={'Home-Sweet-Homes Playhouses'}
            pdf={'/public/pdfs/homesweet.pdf'}
          />
        </Route>
        <Route path='/catalogs/condor' exact>
          <CatalogPage
            title={'The Condor Collection'}
            pdf={'/public/pdfs/condor.pdf'}
          />
        </Route>
        <Route path='/catalogs/eagle' exact>
          <CatalogPage
            title={'The Eagle Collection'}
            pdf={'/public/pdfs/eagle.pdf'}
          />
        </Route>
        <Route path='/catalogs/gazebo' exact>
          <CatalogPage title={'Gazebos'} pdf={'/public/pdfs/gazebos.pdf'} />
        </Route>
        <Route path='/catalogs/swingset' exact>
          <CatalogPage
            title={'Swingsets and Play Structures'}
            pdf={'/public/pdfs/playstructures.pdf'}
          />
        </Route>
        <Route path='/catalogs/playground' exact>
          <CatalogPage
            title={'Wooden Playground Equipment'}
            pdf={'/public/pdfs/playground.pdf'}
          />
        </Route>
        <Route path='/catalogs/horsestall' exact>
          <CatalogPage
            title={'Custom Horse Stalls'}
            pdf={'/public/pdfs/stalls.pdf'}
          />
        </Route>
        <Route path='/sheds' exact>
          <ProductList
            title={'Sheds, Custom Sheds, Garages'}
            subtitle={
              'All products come fully assembled & professionally delivered. We provide onsite installation and set up when necessary.'
            }
            prodType={'Shed'}
            urlPath={'sheds'}
          />
        </Route>
        <Route path='/' component={Home} exact />
      </Switch>
    </Router>
  )
}

export default App
