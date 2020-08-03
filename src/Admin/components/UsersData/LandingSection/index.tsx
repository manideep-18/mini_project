import React, { Component } from 'react';
import { History } from 'history';
import { observer } from 'mobx-react';

import TabsStore from '../../../stores/TabsStore';
import TabsSwitch from '../../../common/TabsSwitch';

import BaseTableWithoutCheckbox from '../../../../Common/components/BaseTableWithoutCheckbox';
import ResponsiveContainer from '../../../../Common/components/ResponsiveContainer';
import SearchAndFilterAndButtons from '../../../../Common/components/SearchAndFilterAndButtons';
import LoadingWrapper from '../../../../Common/components/LoadingWrapper';

import {
  usersSortConstants,
  usersFilterConstants,
} from '../../../constants/DropdownConstants';
import { goToUserDetailsPage } from '../../../utils/NavigationUtils';
import UsersStore from '../../../stores/UsersStore';
import { mainPageHeaderArray } from '../../../constants/UsersPageConstants';

import { LandingMainContainer } from './styledComponents';

interface Props {
  history: History;
  tabsStore: TabsStore;
  usersStore: UsersStore;
}

@observer
class LandingSection extends Component<Props> {
  handleUpdateTabs = (status: string): void => {
    const { tabsStore } = this.props;
    const { updateTabStatus } = tabsStore;
    updateTabStatus(status);
  };

  handleClickedItemCard = (value: string): void => {
    const { history } = this.props;
    goToUserDetailsPage(history, value);
    window.location.reload();
  };

  handleSearchEnter = (): void => {};

  handleSortTypeUpdate = (value: string): void => {
    const { usersStore } = this.props;
    usersStore.setSortType(value);
  };

  handleFilterTypeUpdate = (value: string): void => {
    const { usersStore } = this.props;
    usersStore.setFilterType(value);
  };

  handleRetry = (): void => {
    const { usersStore } = this.props;
    usersStore.getUsersDataAPI(this.onSuccess);
  };

  onSuccess = () => {};

  componentDidMount() {
    const { tabsStore, usersStore } = this.props;
    const { updateTabStatus } = tabsStore;
    updateTabStatus('Users');
    usersStore.getUsersDataAPI(this.onSuccess);
  }

  render(): React.ReactNode {
    const { tabsStore, usersStore, history } = this.props;
    const { tabStatus } = tabsStore;
    const { getUsersDataAPIStatus } = usersStore;
    return (
      <LandingMainContainer>
        <TabsSwitch
          history={history}
          tabStatus={tabStatus}
          onUpdateTabs={this.handleUpdateTabs}
        />
        <ResponsiveContainer>
          <SearchAndFilterAndButtons
            onSearchEnter={this.handleSearchEnter}
            checkedItemsLength={0}
            onSortStatusUpdate={this.handleSortTypeUpdate}
            onFilterStatusUpdate={this.handleFilterTypeUpdate}
            sortConstants={usersSortConstants}
            filterConstants={usersFilterConstants}
          />
          <LoadingWrapper
            onRetry={this.handleRetry}
            apiStatus={getUsersDataAPIStatus}
          >
            <BaseTableWithoutCheckbox
              id='Person Name'
              headerArray={mainPageHeaderArray}
              dataArray={usersStore.sortedDataWithFiltered}
              onClickItemCard={this.handleClickedItemCard}
            />
          </LoadingWrapper>
        </ResponsiveContainer>
      </LandingMainContainer>
    );
  }
}

export default LandingSection;
