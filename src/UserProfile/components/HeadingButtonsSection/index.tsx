import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';

import LoadingWrapper from '../../../Common/components/LoadingWrapper';

import UserStore from '../../stores/UserStore';
import { goToProfileStatusPage } from '../../utils/NavigationUtils';

import {
  TextButtonsContainer,
  Heading,
  ButtonsContainer,
  AdminButton,
  UserButton,
} from './styledComponents';

interface Props {
  history: History;
  userStore: UserStore;
}

@observer
class HeadingButtonsSection extends Component<Props> {
  onSuccess = (): void => {
    const { userStore, history } = this.props;
    const { profileStatus } = userStore;
    goToProfileStatusPage(history, profileStatus);
  };

  handleAdminClick = (): void => {
    const { userStore } = this.props;
    const request = { profile_request_type: 'Admin' };
    userStore.getUserProfileAPI(request, this.onSuccess);
  };

  handleUserClick = (): void => {
    const { userStore } = this.props;
    const request = { profile_request_type: 'User' };
    userStore.getUserProfileAPI(request, this.onSuccess);
  };

  render(): React.ReactNode {
    const { userStore } = this.props;
    const { getUserProfileAPIStatus } = userStore;
    return (
      <TextButtonsContainer>
        <LoadingWrapper
          apiStatus={getUserProfileAPIStatus}
          onRetry={this.handleAdminClick}
        >
          <Heading>Resource Management Portal</Heading>
          <ButtonsContainer>
            <AdminButton buttonText='Admin' onClick={this.handleAdminClick} />
            <UserButton buttonText='User' onClick={this.handleUserClick} />
          </ButtonsContainer>
        </LoadingWrapper>
      </TextButtonsContainer>
    );
  }
}

export default HeadingButtonsSection;
