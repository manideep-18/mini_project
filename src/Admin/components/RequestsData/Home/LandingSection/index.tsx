import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';
import { withRouter } from 'react-router-dom';

import TabsSwitch from '../../../../../Common/components/TabsSwitch';
import ResponsiveContainer from '../../../../../Common/components/ResponsiveContainer';
import BaseTable from '../../../../../Common/components/BaseTable';

import TabsStore from '../../../../stores/TabsStore';
import RequestsStore from '../../../../stores/RequestsStore';

import { MainContainer, PendingRequestsText } from './styledComponents';
import LoadingWrapper from '../../../../../Common/components/LoadingWrapper';
import SearchAndFilterAndButtons from './SearchAndFilterAndButtons';
import { observable } from 'mobx';

interface Props {
  history: History;
  match: any;
  location: any;
  tabsStore: TabsStore;
  requestsStore: RequestsStore;
}

@observer
class LandingSection extends Component<Props> {
  @observable itemsChecked: any = [];

  handleUpdateTabs = (status: string) => {
    const { tabsStore, history } = this.props;
    const { updateTabStatus } = tabsStore;
    updateTabStatus(status);
  };

  handleChangeCheckbox = (value: any, checked: boolean) => {
    if (checked) {
      const resultIndex = this.itemsChecked.findIndex(
        (eachItem: any) => eachItem.id === value.id
      );

      if (resultIndex === -1) {
        this.itemsChecked.push(value);
      }
    } else {
      this.itemsChecked = this.itemsChecked.filter(
        (eachItem: any) => eachItem.id !== value.id
      );
    }
  };

  handleSortStatusUpdate = (value: string) => {
    const { requestsStore } = this.props;
    if (value !== '') requestsStore.getSortedRequestsDataAPI(this.onSuccess);
  };

  handleFilterStatusUpdate = () => {};

  handleRetry = () => {
    const { requestsStore } = this.props;
    requestsStore.getRequestsDataAPI(this.onSuccess);
  };

  onSuccess = () => {};

  componentDidMount() {
    const { requestsStore } = this.props;
    requestsStore.getRequestsDataAPI(this.onSuccess);
  }

  render() {
    const headerArray: string[] = [
      'person name',
      'resource',
      'item',
      'access level',
      'due date time',
    ];
    const { tabsStore, requestsStore, history } = this.props;
    const { tabStatus } = tabsStore;
    const {
      getRequestsDataAPIStatus,
      getSortedRequestsDataAPIStatus,
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
                checkedItemsLength={this.itemsChecked.length}
                onSortStatusUpdate={this.handleSortStatusUpdate}
                onFilterStatusUpdate={this.handleFilterStatusUpdate}
              />
              <LoadingWrapper
                apiStatus={getSortedRequestsDataAPIStatus}
                onRetry={this.handleRetry}
              >
                <BaseTable
                  headerArray={headerArray}
                  dataArray={requestsStore.requestsDataFetched}
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

export default withRouter(LandingSection);
