import React from 'react';
import {render} from 'react-dom';
import App from './components/app.jsx';
import Home from './components/home.jsx';
import About from './components/about/about.jsx';
import { Router, Route, Link, browserHistory } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="home" component={Home}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))

module.hot.accept();