import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';
import { withRouter } from 'react-router-dom';

import TabsSwitch from '../../../../../Common/components/TabsSwitch';
import ResponsiveContainer from '../../../../../Common/components/ResponsiveContainer';
import BaseTable from '../../../../../Common/components/BaseTable';

import TabsStore from '../../../../stores/TabsStore';
import RequestsStore from '../../../../stores/RequestsStore';

import { MainContainer } from './styledComponents';

interface Props {
  history: History;
  match: any;
  location: any;
  tabsStore: TabsStore;
  requestsStore: RequestsStore;
}

@observer
class LandingSection extends Component<Props> {
  handleUpdateTabs = (status: string) => {
    const { tabsStore, history } = this.props;
    const { updateTabStatus } = tabsStore;
    updateTabStatus(status);
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
    if (requestsStore.requestsDataFetched) {
      return (
        <MainContainer>
          <TabsSwitch
            history={history}
            tabStatus={tabStatus}
            onUpdateTabs={this.handleUpdateTabs}
          />
          <ResponsiveContainer>
            <BaseTable
              headerArray={headerArray}
              dataArray={requestsStore.requestsDataFetched}
              onChangeCheckbox={() => {}}
            />
          </ResponsiveContainer>
        </MainContainer>
      );
    }
  }
}

export default withRouter(LandingSection);
