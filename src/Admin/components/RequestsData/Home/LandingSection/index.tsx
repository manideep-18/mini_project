import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';
import { observable } from 'mobx';

import ResponsiveContainer from '../../../../../Common/components/ResponsiveContainer';
import BaseTable from '../../../../../Common/components/BaseTable';
import LoadingWrapper from '../../../../../Common/components/LoadingWrapper';
import SearchAndFilterAndButtons from '../../../../../Common/components/SearchAndFilterAndButtons';

import TabsSwitch from '../../../../common/TabsSwitch';
import TabsStore from '../../../../stores/TabsStore';
import RequestsStore from '../../../../stores/RequestsStore';
import { requestsTableHeaderList } from '../../../../constants/TableHeaderConstants';

import { MainContainer, PendingRequestsText } from './styledComponents';

interface Props {
  history: History;
  tabsStore: TabsStore;
  requestsStore: RequestsStore;
}

@observer
class LandingSection extends Component<Props> {
  @observable itemsChecked!: { id: number }[];

  constructor(props: Props) {
    super(props);
    this.itemsChecked = [];
  }

  handleUpdateTabs = (status: string) => {
    const { tabsStore } = this.props;
    const { updateTabStatus } = tabsStore;
    updateTabStatus(status);
  };

  handleChangeCheckbox = (id: number, checked: boolean) => {
    if (checked) {
      const resultIndex = this.itemsChecked.findIndex(
        (eachItem: any) => eachItem.id === id
      );

      if (resultIndex === -1) {
        const item = { id: id };
        this.itemsChecked.push(item);
      }
    } else {
      this.itemsChecked = this.itemsChecked.filter(
        (eachItem: any) => eachItem.id !== id
      );
    }
  };

  handleSortStatusUpdate = (value: string) => {
    const { requestsStore } = this.props;
    requestsStore.setSortStatus(value);
  };

  handleFilterStatusUpdate = (value: string) => {
    const { requestsStore } = this.props;
    requestsStore.setFilterStatus(value);
  };

  handleSearchEnter = (value: string) => {
    const { requestsStore } = this.props;
    requestsStore.getSearchRequestsDataAPI(this.onSuccess);
  };

  handleAcceptRequests = () => {
    const { requestsStore } = this.props;

    requestsStore.getOnAcceptRequestsDataAPI(this.itemsChecked, this.onSuccess);
    this.itemsChecked = [];
  };

  handleRetry = () => {
    const { requestsStore } = this.props;
    requestsStore.getRequestsDataAPI(this.onSuccess);
  };

  onSuccess = () => {};

  componentDidMount() {
    const { requestsStore, tabsStore } = this.props;
    const { updateTabStatus } = tabsStore;
    updateTabStatus('Requests');
    requestsStore.getRequestsDataAPI(this.onSuccess);
  }

  render() {
    const { tabsStore, requestsStore, history } = this.props;
    const { tabStatus } = tabsStore;
    const {
      getRequestsDataAPIStatus,
      getSearchRequestsDataAPIStatus,
      getOnAcceptRequestsDataAPIStatus,
    } = requestsStore;
    if (requestsStore.requestsDataFetched) {
      return (
        <MainContainer>
          <TabsSwitch
            history={history}
            tabStatus={tabStatus}
            onUpdateTabs={this.handleUpdateTabs}
          />
          <LoadingWrapper
            apiStatus={getRequestsDataAPIStatus}
            onRetry={this.handleRetry}
          >
            <ResponsiveContainer>
              <PendingRequestsText>Pending Requests</PendingRequestsText>
              <SearchAndFilterAndButtons
                onSearchEnter={this.handleSearchEnter}
                checkedItemsLength={this.itemsChecked.length}
                onSortStatusUpdate={this.handleSortStatusUpdate}
                onFilterStatusUpdate={this.handleFilterStatusUpdate}
                onAcceptRequests={this.handleAcceptRequests}
                onAcceptRequestsStatus={getOnAcceptRequestsDataAPIStatus}
              />
              <LoadingWrapper
                apiStatus={getSearchRequestsDataAPIStatus}
                onRetry={this.handleRetry}
              >
                <BaseTable
                  headerArray={requestsTableHeaderList}
                  dataArray={requestsStore.sortedDataWithFiltering}
                  onChangeCheckbox={this.handleChangeCheckbox}
                />
              </LoadingWrapper>
            </ResponsiveContainer>
          </LoadingWrapper>
        </MainContainer>
      );
    }
  }
}

export default LandingSection;
