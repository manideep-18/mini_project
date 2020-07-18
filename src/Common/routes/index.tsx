import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Homepage from '../../Admin/routes/Homepage';
import AddResourcePage from '../../Admin/routes/AddResourcePage';
import ResourceDetailsPage from '../../Admin/routes/ResourceDetailsPage';
import AddItemPage from '../../Admin/routes/AddItemPage';

export class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Header} />

            <Route exact path='/admin/' component={Homepage} />
            <Route exact path='/admin/resources' component={Homepage} />
            <Route
              exact
              path='/admin/addResource'
              component={AddResourcePage}
            />
            <Route
              exact
              path='/admin/:resource_id'
              component={ResourceDetailsPage}
            />
            <Route
              path='/admin/:resource_id/add-item'
              component={AddItemPage}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
