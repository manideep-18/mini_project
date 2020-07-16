import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Homepage from '../../Admin/components/Homepage';
import AddResourcePage from '../../Admin/components/AddResourcePage';

export class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Header} />

            <Route exact path='/admin' component={Homepage} />
            <Route path='/admin/addResource' component={AddResourcePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
