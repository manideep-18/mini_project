import React, { Component } from 'react';
import { History } from 'history';
import { withRouter } from 'react-router-dom';

import TabsStore from '../../../stores/TabsStore';
import TabsSwitch from '../../../../Common/components/TabsSwitch';

import { LandingMainContainer } from './styledComponents';
import UsersStore from '../../../stores/UsersStore';
import { observer } from 'mobx-react';
import BaseTableWithoutCheckbox from '../../../../Common/components/BaseTableWithoutCheckbox';
import { mainPageHeaderArray } from '../../../constants/usersPageConstants';
import ResponsiveContainer from '../../../../Common/components/ResponsiveContainer';
import SearchAndFilterAndButtons from '../../../../Common/components/SearchAndFilterAndButtons';
import {
  usersSortConstants,
  usersFilterConstants,
} from '../../../constants/DropdownConstants';
import LoadingWrapper from '../../../../Common/components/LoadingWrapper';

interface Props {
  history: History;
  match: any;
  location: any;
  tabsStore: TabsStore;
  usersStore: UsersStore;
}

@observer
class LandingSection extends Component<Props> {
  handleUpdateTabs = (status: string) => {
    const { tabsStore, history } = this.props;
    const { updateTabStatus } = tabsStore;
    updateTabStatus(status);
  };

  handleClickedItemCard = () => {};

  handleSearchEnter = () => {};

  handleSortTypeUpdate = (value: string) => {
    const { usersStore } = this.props;
    usersStore.setSortType(value);
  };

  handleFilterTypeUpdate = (value: string) => {
    const { usersStore } = this.props;
    usersStore.setFilterType(value);
  };

  handleRetry = () => {
    const { usersStore } = this.props;
    usersStore.getUsersDataAPI(this.onSuccess);
  };

  onSuccess = () => {};

  componentDidMount() {
    const { tabsStore, history, usersStore } = this.props;
    const { updateTabStatus } = tabsStore;
    updateTabStatus('Users');
    usersStore.getUsersDataAPI(this.onSuccess);
  }

  render() {
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

export default withRouter(LandingSection);
