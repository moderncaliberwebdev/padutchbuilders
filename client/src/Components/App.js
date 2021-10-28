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
import ProductPage from '../Pages/ProductPage'

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
          />
        </Route>
        <Route
          path='/products/sheds/:productid'
          component={ProductPage}
          exact
        />
        <Route path='/gazebos' exact>
          <ProductList
            title={'Gazebos, Pergolas, Pavilions'}
            subtitle={
              'All products come fully assembled & professionally delivered.'
            }
            prodType={'Gazebo'}
          />
        </Route>
        <Route
          path='/products/gazebos/:productid'
          component={ProductPage}
          exact
        />
        <Route path='/poolhouses' exact>
          <ProductList
            title={'Pool Houses, Playhouses, Cabins'}
            subtitle={
              'All products come fully assembled & professionally delivered.'
            }
            prodType={'Poolhouses'}
          />
        </Route>
        <Route
          path='/products/poolhouses/:productid'
          component={ProductPage}
          exact
        />
        <Route path='/petstructures' exact>
          <ProductList
            title={'Pet Structures, Horse Barns, Custom Barns'}
            subtitle={
              'All products come fully assembled & professionally delivered.'
            }
            prodType={'Pet Structures'}
          />
        </Route>
        <Route
          path='/products/petstructures/:productid'
          component={ProductPage}
          exact
        />
        <Route path='/roofing' exact>
          <ProductList
            title={'Roofing, Siding, and Amish Contractors'}
            subtitle={[
              'If you want to post your project for estimates or bids. - Visit ',
              <a href='https://padutchcontractors.com' className='subtitle__a'>
                PaDutchContractors.com
              </a>,
            ]}
            prodType={'Roofing'}
          />
        </Route>
        <Route
          path='/products/roofing/:productid'
          component={ProductPage}
          exact
        />
        <Route path='/decks' exact>
          <ProductList title={'Decks, Porches, Fencing'} prodType={'Decks'} />
        </Route>
        <Route
          path='/products/decks/:productid'
          component={ProductPage}
          exact
        />
        <Route path='/swingsets' exact>
          <ProductList
            title={'Swingsets, Play Structures, Fireplaces'}
            subtitle={
              'All products come fully assembled & professionally delivered.'
            }
            prodType={'Swingsets'}
          />
        </Route>
        <Route
          path='/products/swingsets/:productid'
          component={ProductPage}
          exact
        />
        <Route path='/industrialequipment' exact>
          <ProductList
            title={'Industrial Equipment, Buggies & Wagons'}
            prodType={'Industrial Equipment'}
          />
        </Route>
        <Route
          path='/products/industrialequipment/:productid'
          component={ProductPage}
          exact
        />
        <Route path='/allproducts' exact>
          <ProductList
            title={'All Products'}
            subtitle={'All products offered by PADutchBuilders.com'}
            prodType={''}
          />
        </Route>
        <Route path='/' component={Home} exact />
      </Switch>
    </Router>
  )
}

export default App
