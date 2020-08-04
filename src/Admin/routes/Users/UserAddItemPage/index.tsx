import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Header from '../../../../Common/components/Header';

import AddItemForm from '../../../components/UsersData/AddItemForm';
import UsersStore from '../../../stores/UsersStore';

import { AddItemMainContainer } from './styledComponents';

interface Props {
  usersStore: UsersStore;
}

@inject('usersStore')
@observer
class UserAddItemPage extends Component<Props> {
  render() {
    const { usersStore } = this.props;
    return (
      <AddItemMainContainer>
        <Header />
        <AddItemForm usersStore={usersStore} />
      </AddItemMainContainer>
    );
  }
}

export default UserAddItemPage;
