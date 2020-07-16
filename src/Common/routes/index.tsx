import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Homepage from '../../Admin/components/Homepage';

export class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Header} />

            <Route path='/admin' component={Homepage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
