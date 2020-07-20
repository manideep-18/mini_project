import React, { Component } from 'react';
import { MainContainer } from './styledComponents';
import { inject, observer } from 'mobx-react';

import TabsStore from '../../../stores/TabsStore';
import Header from '../../../../Common/components/Header';
import LandingSection from '../../../components/RequestsData/Home/LandingSection';
import RequestsStore from '../../../stores/RequestsStore';

interface Props {
  tabsStore: TabsStore;
  requestsStore: RequestsStore;
}

@inject('tabsStore', 'requestsStore')
@observer
class RequestsHomePage extends Component<Props> {
  render() {
    const { tabsStore, requestsStore } = this.props;

    return (
      <MainContainer>
        <Header />
        <LandingSection tabsStore={tabsStore} requestsStore={requestsStore} />
      </MainContainer>
    );
  }
}

export default RequestsHomePage;
