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
        <Route path='/' component={Home} exact />
      </Switch>
    </Router>
  )
}

export default App
