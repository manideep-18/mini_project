import React, { Component } from 'react';
import { History } from 'history';
import { observer } from 'mobx-react';

import ResponsiveContainer from '../../../../Common/components/ResponsiveContainer';
import { nameSpacesConversion } from '../../../../Common/utils/StringConversionUtils';

import TabsSwitchStore from '../../../stores/TabsSwitchStore';
import TabsSection from '../../../common/Components/TabsSection';
import { goToUserTabActivePage } from '../../../utils/NavigationUtils';

import { TabsAndResourcesListContainer } from './styledComponents';
import BaseTableWithoutCheckbox from '../../../../Common/components/BaseTableWithoutCheckbox';
import { myResourcesTableHeaderConstants } from '../../../constants/TableHeaderConstants';
import MyRequestsStore from '../../../stores/MyRequestsStore';
import LoadingWrapper from '../../../../Common/components/LoadingWrapper';
import SearchAndFilterAndButtons from '../../../../Common/components/SearchAndFilterAndButtons';
import {
  myResourcesSortConstants,
  myResourcesFilterConstants,
} from '../../../constants/DropdownConstants';

interface Props {
  history: History;
  tabsSwitchStore: TabsSwitchStore;
  myRequestsStore: MyRequestsStore;
}

@observer
export class LandingSection extends Component<Props> {
  handleTabStatusChange = (value: string) => {
    const { tabsSwitchStore, history } = this.props;
    const { updateTabStatus } = tabsSwitchStore;

    updateTabStatus(value);
    goToUserTabActivePage(history, nameSpacesConversion(value));
  };

  handleSearchEnter = () => {};

  handleSortTypeUpdate = (value: string) => {
    const { myRequestsStore } = this.props;
    const { setSortType } = myRequestsStore;
    setSortType(value);
  };

  handleFilterTypeUpdate = (value: string) => {
    const { myRequestsStore } = this.props;
    const { setFilterType } = myRequestsStore;
    setFilterType(value);
  };

  onSuccess = () => {};

  handleRetry = () => {
    const { myRequestsStore } = this.props;
    myRequestsStore.getMyResourcesDataAPI(this.onSuccess);
  };

  componentDidMount() {
    const { myRequestsStore, tabsSwitchStore } = this.props;
    const { updateTabStatus } = tabsSwitchStore;
    updateTabStatus('My Requests');
    myRequestsStore.getMyResourcesDataAPI(this.onSuccess);
  }

  render() {
    const { tabsSwitchStore, myRequestsStore } = this.props;
    const { tabStatus } = tabsSwitchStore;
    console.log(tabStatus, '???');
    const {
      sortedDataWithFiltered,
      getMyResourcesDataAPIStatus,
    } = myRequestsStore;
    return (
      <TabsAndResourcesListContainer>
        <ResponsiveContainer>
          {/* <TabsSection
            tabStatus={tabStatus}
            onTabStatusChanged={this.handleTabStatusChange}
          /> */}
          <SearchAndFilterAndButtons
            onSearchEnter={this.handleSearchEnter}
            checkedItemsLength={0}
            onSortStatusUpdate={this.handleSortTypeUpdate}
            onFilterStatusUpdate={this.handleFilterTypeUpdate}
            sortConstants={myResourcesSortConstants}
            filterConstants={myResourcesFilterConstants}
          />
          <LoadingWrapper
            apiStatus={getMyResourcesDataAPIStatus}
            onRetry={this.handleRetry}
          >
            <BaseTableWithoutCheckbox
              headerArray={myResourcesTableHeaderConstants}
              dataArray={sortedDataWithFiltered}
              onClickItemCard={() => {}}
            />
          </LoadingWrapper>
        </ResponsiveContainer>
      </TabsAndResourcesListContainer>
    );
  }
}

export default LandingSection;
