import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Homepage from '../../Admin/routes/Resources/Homepage';
import AddResourcePage from '../../Admin/routes/Resources/AddResourcePage';
import ResourceDetailsPage from '../../Admin/routes/Resources/ResourceDetailsPage';
import AddItemPage from '../../Admin/routes/Resources/AddItemPage';
import { REQUESTS_PAGE } from '../constants/RouteConstants';
import RequestsHomePage from '../../Admin/routes/Requests/RequestsHomePage';

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
              path='/admin/resources/add-resource'
              component={AddResourcePage}
            />
            <Route
              exact
              path='/admin/resources/:resource_id'
              component={ResourceDetailsPage}
            />
            <Route
              exact
              path='/admin/resources/:resource_id/add-item'
              component={AddItemPage}
            />
            <Route exact path={REQUESTS_PAGE} component={RequestsHomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
