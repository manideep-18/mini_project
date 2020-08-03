import React, { Component } from 'react';
import { History } from 'history';

import { MainContainer } from './styledComponents';
import Header from '../../../Common/components/Header';
import LoginFieldsSection from '../../../Common/components/LoginFieldsSection';
import { inject, observer } from 'mobx-react';
import AuthStore from '../../stores/AuthStore';
import { withRouter } from 'react-router-dom';
import { goToAdminHomeResourcesPage } from '../../utils/NavigationUtils';
import LoadingWrapper from '../../../Common/components/LoadingWrapper';

interface Props {
  history: History;
  match: any;
  location: any;
  adminAuthStore: AuthStore;
}

@inject('adminAuthStore')
@observer
class LoginPage extends Component<Props> {
  onSuccess = () => {
    const { history } = this.props;
    goToAdminHomeResourcesPage(history);
  };

  handleLoginClick = (userName: string, password: string) => {
    const { adminAuthStore } = this.props;
    const request = { user_name: userName, user_password: password };
    adminAuthStore.loginOrRegisterAPI(request, this.onSuccess);
  };

  render() {
    const { adminAuthStore } = this.props;
    const { loginOrRegisterAPIStatus } = adminAuthStore;
    return (
      <MainContainer id='loginPage'>
        <Header />
        <LoadingWrapper
          apiStatus={loginOrRegisterAPIStatus}
          onRetry={this.handleLoginClick}
        >
          <LoginFieldsSection onLoginClick={this.handleLoginClick} />
        </LoadingWrapper>
      </MainContainer>
    );
  }
}

export default withRouter(LoginPage);
