import React, { Component } from 'react';
import { DetailsPageMainContainer } from './styledComponents';
import Header from '../../../../Common/components/Header';
import UserDetailsData from '../../../components/UsersData/UserDetailsData';
import { inject, observer } from 'mobx-react';
import UsersStore from '../../../stores/UsersStore';

interface Props {
  usersStore: UsersStore;
}

@inject('usersStore')
@observer
class UserDetailsPage extends Component<Props> {
  render() {
    const { usersStore } = this.props;
    return (
      <DetailsPageMainContainer>
        <Header />
        <UserDetailsData usersStore={usersStore} />
      </DetailsPageMainContainer>
    );
  }
}

export default UserDetailsPage;
