import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import 'regenerator-runtime/runtime.js'

import '../css/App.css'

// import { actions } from '../store'
import Home from '../Pages/Home'

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
        <Route path='/' component={Home} exact />
      </Switch>
    </Router>
  )
}

export default App
