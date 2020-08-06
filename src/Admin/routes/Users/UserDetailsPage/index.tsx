import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import { inject, observer } from 'mobx-react';

import Header from '../../../../Common/components/Header';

import UserDetailsData from '../../../components/UsersData/UserDetailsData';
import UsersStore from '../../../stores/UsersStore';

import { DetailsPageMainContainer } from './styledComponents';

interface Props {
  history: History;
  location: any;
  match: any;
  usersStore: UsersStore;
}

@inject('usersStore')
@observer
class UserDetailsPage extends Component<Props> {
  render(): React.ReactNode {
    const { usersStore, history } = this.props;
    return (
      <DetailsPageMainContainer>
        <Header />
        <UserDetailsData history={history} usersStore={usersStore} />
      </DetailsPageMainContainer>
    );
  }
}

export default withRouter(UserDetailsPage);
