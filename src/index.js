import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
//import Routes from './routes'
import Template from './containers/Template'
import Home from './containers/Home'
import Profile from './containers/Profile'

ReactDOM.render(
  <Router>
      <Template>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
      </Template>
  </Router>,
  document.getElementById('root')
)
