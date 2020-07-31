import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ResourcesHomepage from '../../Admin/routes/Resources/Homepage';
import AddResourcePage from '../../Admin/routes/Resources/AddResourcePage';
import ResourceDetailsPage from '../../Admin/routes/Resources/ResourceDetailsPage';
import AddItemPage from '../../Admin/routes/Resources/AddItemPage';
import RequestsHomePage from '../../Admin/routes/Requests/RequestsHomePage';
import UsersHomePage from '../../Admin/routes/Users/HomePage';

import Header from '../components/Header';
import {
  REQUESTS_PAGE,
  ADMIN_USERS_PAGE,
  ADMIN_EACH_USER_PAGE,
  USER_MY_REQUESTS_PAGE,
  USER_MY_RESOURCES_PAGE,
  USER_REQUESTING_PAGE,
  HOME_PAGE,
} from '../constants/RouteConstants';
import UserDetailsPage from '../../Admin/routes/Users/UserDetailsPage';
import MyRequestsPage from '../../User/routes/MyRequestsPage';
import { MyResourcesPage } from '../../User/routes/MyResourcesPage';
import { RequestDetailedPage } from '../../User/routes/MyRequestsPage/RequestDetailedPage';
import HomePage from '../../UserProfile/routes/HomePage';

export class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path={HOME_PAGE} component={HomePage} />

            <Route exact path='/admin/' component={Header} />
            <Route
              exact
              path='/admin/resources'
              component={ResourcesHomepage}
            />
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
            <Route exact path={ADMIN_USERS_PAGE} component={UsersHomePage} />
            <Route
              exact
              path={ADMIN_EACH_USER_PAGE}
              component={UserDetailsPage}
            />
            <Route exact path='/user/' component={Header} />
            <Route
              exact
              path={USER_MY_REQUESTS_PAGE}
              component={MyRequestsPage}
            />
            <Route
              exact
              path={USER_REQUESTING_PAGE}
              component={RequestDetailedPage}
            />
            <Route
              exact
              path={USER_MY_RESOURCES_PAGE}
              component={MyResourcesPage}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
