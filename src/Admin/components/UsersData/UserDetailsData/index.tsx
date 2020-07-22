import React, { Component } from 'react';
import {
  DetailsContentContainer,
  ButtonsContainer,
  AddButton,
  DeleteButton,
} from './styledComponents';
import BackButton from '../../../../Common/components/BackButton';
import UsersStore from '../../../stores/UsersStore';
import UserInfo from './UserInfo';
import ResponsiveContainer from '../../../../Common/components/ResponsiveContainer';
import LoadingWrapper from '../../../../Common/components/LoadingWrapper';
import { observer } from 'mobx-react';
import BaseTable from '../../../../Common/components/BaseTable';
import { userTableHeaderList } from '../../../constants/tableHeaderConstants';
import { observable } from 'mobx';

interface Props {
  usersStore: UsersStore;
}

@observer
class UserDetailsData extends Component<Props> {
  @observable deleteItemsList: number[] = [];

  onChangeCheckbox = (itemId: any, checked: boolean) => {
    if (checked) {
      const resultIndex = this.deleteItemsList.findIndex(
        (eachId) => itemId === eachId
      );

      if (resultIndex === -1) {
        this.deleteItemsList.push(itemId);
      }
    } else {
      this.deleteItemsList = this.deleteItemsList.filter(
        (eachId) => eachId !== itemId
      );
    }
  };

  handleAddUserItem = () => {};

  handleDeleteUserItems = () => {};

  renderAddDeleteButtons = () => {
    return (
      <ButtonsContainer>
        <AddButton
          buttonText='ADD ITEM'
          disabled={this.deleteItemsList.length > 0}
          onClick={this.handleAddUserItem}
        />
        <DeleteButton
          buttonText='DELETE'
          disabled={this.deleteItemsList.length === 0}
          onClick={this.handleDeleteUserItems}
        />
      </ButtonsContainer>
    );
  };

  onSuccess = () => {};

  componentDidMount() {
    const { usersStore } = this.props;
    let personName = '';
    if (typeof window !== 'undefined') {
      personName = window.location.pathname;
      const pathParameters = personName.split('/');
      personName = pathParameters[pathParameters.length - 1];
    }

    usersStore.getUserItemDataAPI({ person_name: personName }, this.onSuccess);
  }

  render() {
    const { usersStore } = this.props;

    const { userItemDataFetched, getUserItemDataAPIStatus } = usersStore;

    return (
      <DetailsContentContainer>
        <BackButton backLinkText='/admin/users' backText='users' />
        <ResponsiveContainer>
          <LoadingWrapper
            apiStatus={getUserItemDataAPIStatus}
            onRetry={() => {}}
          >
            <UserInfo userInfoData={userItemDataFetched} />
            <BaseTable
              headerArray={userTableHeaderList}
              dataArray={
                userItemDataFetched ? userItemDataFetched.itemsList : []
              }
              onChangeCheckbox={this.onChangeCheckbox}
            />
            {this.renderAddDeleteButtons()}
          </LoadingWrapper>
        </ResponsiveContainer>
      </DetailsContentContainer>
    );
  }
}

export default UserDetailsData;
