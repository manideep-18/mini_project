import React, { Component } from 'react';
import { MainContainer } from './styledComponents';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

import TabsStore from '../../../stores/TabsStore';
import Header from '../../../../Common/components/Header';
import LandingSection from '../../../components/RequestsData/Home/LandingSection';
import RequestsStore from '../../../stores/RequestsStore';

interface Props {
  history: History;
  match: any;
  location: any;
  tabsStore: TabsStore;
  requestsStore: RequestsStore;
}

@inject('tabsStore', 'requestsStore')
@observer
class RequestsHomePage extends Component<Props> {
  render() {
    const { tabsStore, requestsStore, history } = this.props;

    return (
      <MainContainer>
        <Header />
        <LandingSection
          history={history}
          tabsStore={tabsStore}
          requestsStore={requestsStore}
        />
      </MainContainer>
    );
  }
}

export default withRouter(RequestsHomePage);
