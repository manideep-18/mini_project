import React, { Component } from 'react';
import { History } from 'history';
import { observer } from 'mobx-react';

import ResponsiveContainer from '../../../../Common/components/ResponsiveContainer';
import { nameSpacesConversion } from '../../../../Common/utils/StringConversionUtils';
import LoadingWrapper from '../../../../Common/components/LoadingWrapper';
import BaseTableWithoutCheckbox from '../../../../Common/components/BaseTableWithoutCheckbox';
import SearchAndFilterAndButtons from '../../../../Common/components/SearchAndFilterAndButtons';
import { getLoadingStatus } from '../../../../Common/utils/APIUtils';

import { goToUserTabActivePage } from '../../../utils/NavigationUtils';
import TabsSwitchStore from '../../../stores/TabsSwitchStore';
import TabsSection from '../../../common/Components/TabsSection';
import MyResourcesStore from '../../../stores/MyResourcesStore';
import { myResourcesTableHeaderConstants } from '../../../constants/TableHeaderConstants';
import {
  userSortConstants,
  userFilterConstants,
} from '../../../constants/DropdownConstants';

import { ResourcesDetailsContainer } from './styledComponents';

interface Props {
  history: History;
  tabsSwitchStore: TabsSwitchStore;
  myResourcesStore: MyResourcesStore;
}

@observer
export class LandingSection extends Component<Props> {
  handleTabStatusChange = (value: string): void => {
    const { tabsSwitchStore, history } = this.props;
    const { updateTabStatus } = tabsSwitchStore;

    updateTabStatus(value);
    goToUserTabActivePage(history, nameSpacesConversion(value));
  };

  handleSortTypeUpdate = (value: string): void => {
    const { myResourcesStore } = this.props;
    const { setSortType } = myResourcesStore;
    setSortType(value);
  };

  handleFilterTypeUpdate = (value: string): void => {
    const { myResourcesStore } = this.props;
    const { setFilterType } = myResourcesStore;
    setFilterType(value);
  };

  onSuccess = (): void => {};

  handleSearchEnter = (value: string): void => {
    const { myResourcesStore } = this.props;
    myResourcesStore.getSearchMyResourcesDataAPI(this.onSuccess);
  };

  handleRetry = (): void => {
    const { myResourcesStore } = this.props;

    myResourcesStore.getMyResourcesDataAPI(this.onSuccess);
  };

  componentDidMount() {
    const { myResourcesStore } = this.props;

    myResourcesStore.getMyResourcesDataAPI(this.onSuccess);
  }

  render(): React.ReactNode {
    const { tabsSwitchStore, myResourcesStore } = this.props;
    const { tabStatus } = tabsSwitchStore;
    const {
      sortedDataWithFiltered,
      getMyResourcesDataAPIStatus,
      getSearchMyResourcesDataAPIStatus,
    } = myResourcesStore;

    return (
      <ResourcesDetailsContainer>
        <ResponsiveContainer>
          <TabsSection
            tabStatus={tabStatus}
            onTabStatusChanged={this.handleTabStatusChange}
          />
          <SearchAndFilterAndButtons
            onSearchEnter={this.handleSearchEnter}
            checkedItemsLength={0}
            onSortStatusUpdate={this.handleSortTypeUpdate}
            onFilterStatusUpdate={this.handleFilterTypeUpdate}
            sortConstants={userSortConstants}
            filterConstants={userFilterConstants}
          />
          <LoadingWrapper
            apiStatus={getLoadingStatus(
              getMyResourcesDataAPIStatus,
              getSearchMyResourcesDataAPIStatus
            )}
            onRetry={this.handleRetry}
          >
            <BaseTableWithoutCheckbox
              headerArray={myResourcesTableHeaderConstants}
              dataArray={sortedDataWithFiltered}
              onClickItemCard={() => {}}
            />
          </LoadingWrapper>
        </ResponsiveContainer>
      </ResourcesDetailsContainer>
    );
  }
}

export default LandingSection;
