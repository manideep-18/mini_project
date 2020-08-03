import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ResourcesHomepage from '../../Admin/routes/Resources/Homepage';
import AddResourcePage from '../../Admin/routes/Resources/AddResourcePage';
import ResourceDetailsPage from '../../Admin/routes/Resources/ResourceDetailsPage';
import AddItemPage from '../../Admin/routes/Resources/AddItemPage';
import RequestsHomePage from '../../Admin/routes/Requests/RequestsHomePage';
import UsersHomePage from '../../Admin/routes/Users/HomePage';
import UserDetailsPage from '../../Admin/routes/Users/UserDetailsPage';
import MyRequestsPage from '../../User/routes/MyRequestsPage';
import { MyResourcesPage } from '../../User/routes/MyResourcesPage';
import { RequestDetailedPage } from '../../User/routes/MyRequestsPage/RequestDetailedPage';
import HomePage from '../../UserProfile/routes/HomePage';
import LoginPage from '../../Admin/routes/LoginPage';

import Header from '../components/Header';
import {
  ADMIN_REQUESTS_PAGE,
  ADMIN_USERS_PAGE,
  ADMIN_EACH_USER_PAGE,
  USER_MY_REQUESTS_PAGE,
  USER_MY_RESOURCES_PAGE,
  USER_REQUESTING_PAGE,
  HOME_PAGE,
  ADMIN_HOME_PAGE,
  ADMIN_RESOURCES_PAGE,
  ADMIN_ADD_RESOURCE_PAGE,
  ADMIN_RESOURCE_DETAILS_PAGE,
  ADMIN_RESOURCE_ADD_ITEM_PAGE,
  USER_HOME_PAGE,
} from '../constants/RouteConstants';

export class Routes extends Component {
  render(): React.ReactNode {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path={HOME_PAGE} component={HomePage} />

            <Route exact path={ADMIN_HOME_PAGE} component={LoginPage} />
            <Route
              exact
              path={ADMIN_RESOURCES_PAGE}
              component={ResourcesHomepage}
            />
            <Route
              exact
              path={ADMIN_ADD_RESOURCE_PAGE}
              component={AddResourcePage}
            />
            <Route
              exact
              path={ADMIN_RESOURCE_DETAILS_PAGE}
              component={ResourceDetailsPage}
            />
            <Route
              exact
              path={ADMIN_RESOURCE_ADD_ITEM_PAGE}
              component={AddItemPage}
            />
            <Route
              exact
              path={ADMIN_REQUESTS_PAGE}
              component={RequestsHomePage}
            />
            <Route exact path={ADMIN_USERS_PAGE} component={UsersHomePage} />
            <Route
              exact
              path={ADMIN_EACH_USER_PAGE}
              component={UserDetailsPage}
            />
            <Route exact path={USER_HOME_PAGE} component={Header} />
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
