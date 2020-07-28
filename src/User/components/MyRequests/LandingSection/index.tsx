import React, { Component } from 'react';
import { History } from 'history';
import { observer } from 'mobx-react';

import ResponsiveContainer from '../../../../Common/components/ResponsiveContainer';
import { nameSpacesConversion } from '../../../../Common/utils/StringConversionUtils';

import TabsSwitchStore from '../../../stores/TabsSwitchStore';
import TabsSection from '../../../common/Components/TabsSection';
import {
  goToUserTabActivePage,
  goToUserRequestingPage,
} from '../../../utils/NavigationUtils';

import { TabsAndRequestsListContainer } from './styledComponents';
import BaseTableWithoutCheckbox from '../../../../Common/components/BaseTableWithoutCheckbox';
import { myRequestsTableHeaderConstants } from '../../../constants/TableHeaderConstants';
import MyRequestsStore from '../../../stores/MyRequestsStore';
import LoadingWrapper from '../../../../Common/components/LoadingWrapper';
import SearchAndFilterAndButtons from '../../../../Common/components/SearchAndFilterAndButtons';
import {
  myRequestsSortConstants,
  myRequestsFilterConstants,
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

  handleOnClickItemCard = (value: any) => {
    const { myRequestsStore, history } = this.props;
    const itemCard = myRequestsStore.myRequestsDataFetched.filter(
      (eachRequest) => eachRequest.id === value
    );
    // console.log(itemCard, '***');
    goToUserRequestingPage(history, itemCard[0].status, itemCard[0].id);
  };

  onSuccess = () => {};

  handleRetry = () => {
    const { myRequestsStore } = this.props;
    myRequestsStore.getMyRequestsDataAPI(this.onSuccess);
  };

  componentDidMount() {
    const { myRequestsStore, tabsSwitchStore } = this.props;
    const { updateTabStatus } = tabsSwitchStore;
    updateTabStatus('My Requests');
    myRequestsStore.getMyRequestsDataAPI(this.onSuccess);
  }

  render() {
    const { tabsSwitchStore, myRequestsStore } = this.props;
    const { tabStatus } = tabsSwitchStore;
    // console.log(tabStatus, '???');
    const {
      sortedDataWithFiltered,
      getMyRequestsDataAPIStatus,
    } = myRequestsStore;
    return (
      <TabsAndRequestsListContainer>
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
            sortConstants={myRequestsSortConstants}
            filterConstants={myRequestsFilterConstants}
          />
          <LoadingWrapper
            apiStatus={getMyRequestsDataAPIStatus}
            onRetry={this.handleRetry}
          >
            <BaseTableWithoutCheckbox
              headerArray={myRequestsTableHeaderConstants}
              dataArray={sortedDataWithFiltered}
              onClickItemCard={this.handleOnClickItemCard}
            />
          </LoadingWrapper>
        </ResponsiveContainer>
      </TabsAndRequestsListContainer>
    );
  }
}

export default LandingSection;
