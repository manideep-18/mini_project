import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { History } from 'history';

import BackButton from '../../../../Common/components/BackButton';
import ResponsiveContainer from '../../../../Common/components/ResponsiveContainer';
import LoadingWrapper from '../../../../Common/components/LoadingWrapper';
import BaseTable from '../../../../Common/components/BaseTable';
import SearchAndFilterAndButtons from '../../../../Common/components/SearchAndFilterAndButtons';
import { ADMIN_USERS_PAGE } from '../../../../Common/constants/RouteConstants';

import { userTableHeaderList } from '../../../constants/TableHeaderConstants';
import {
  userItemsSortConstants,
  userItemsFilterConstants,
} from '../../../constants/DropdownConstants';
import UsersStore from '../../../stores/UsersStore';
import { navigateToUserAddItemPage } from '../../../utils/NavigationUtils';

import {
  DetailsContentContainer,
  ButtonsContainer,
  AddButton,
  DeleteButton,
} from './styledComponents';
import UserInfo from './UserInfo';

interface Props {
  history: History;
  usersStore: UsersStore;
}

@observer
class UserDetailsData extends Component<Props> {
  personName: string;
  @observable deleteItemsList: number[];

  constructor(props: Props) {
    super(props);
    this.personName = '';
    this.deleteItemsList = [];
  }

  onChangeCheckbox = (itemId: any, checked: boolean): void => {
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

  handleSortTypeUpdate = (value: string): void => {
    const { usersStore } = this.props;
    usersStore.setUserItemSortType(value);
  };

  handleFilterTypeUpdate = (value: string): void => {
    const { usersStore } = this.props;
    usersStore.setUserItemFilterType(value);
  };

  handleAddUserItem = (): void => {
    const { history, usersStore } = this.props;
    const { userItemDataFetched } = usersStore;
    const { personName } = userItemDataFetched;

    navigateToUserAddItemPage(history, personName.toLowerCase());
  };

  handleDeleteUserItems = (): void => {};

  renderAddDeleteButtons = (): React.ReactNode => {
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

  handleRetry = (): void => {
    const { usersStore } = this.props;
    usersStore.getUserItemDataAPI(
      { person_name: this.personName },
      this.onSuccess
    );
  };

  onSuccess = (): void => {};

  componentDidMount() {
    const { usersStore } = this.props;

    if (typeof window !== 'undefined') {
      this.personName = window.location.pathname;
      const pathParameters = this.personName.split('/');
      this.personName = pathParameters[pathParameters.length - 1];
    }

    usersStore.getUserItemDataAPI(
      { person_name: this.personName },
      this.onSuccess
    );
  }

  render(): React.ReactNode {
    const { usersStore } = this.props;

    const { userItemDataFetched, getUserItemDataAPIStatus } = usersStore;

    return (
      <DetailsContentContainer>
        <BackButton backLinkText={ADMIN_USERS_PAGE} backText='users' />
        <ResponsiveContainer>
          <LoadingWrapper
            apiStatus={getUserItemDataAPIStatus}
            onRetry={this.handleRetry}
          >
            <UserInfo userInfoData={userItemDataFetched} />
            <SearchAndFilterAndButtons
              onSearchEnter={() => {}}
              checkedItemsLength={0}
              onSortStatusUpdate={this.handleSortTypeUpdate}
              onFilterStatusUpdate={this.handleFilterTypeUpdate}
              sortConstants={userItemsSortConstants}
              filterConstants={userItemsFilterConstants}
            />
            <BaseTable
              headerArray={userTableHeaderList}
              dataArray={
                userItemDataFetched
                  ? usersStore.sortedUserItemsDataWithFiltered
                  : []
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
