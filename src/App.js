import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';

import Page2 from './view/login';
import Page1 from './view/main';

const history = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/login' component={Page2} />
          <Route exact path='/' component={Page1} />
        </Switch>
      </Router>
    );
  }
}