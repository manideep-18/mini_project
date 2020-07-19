import React, { Component } from 'react';
import { MainContainer } from './styledComponents';
import { inject, observer } from 'mobx-react';

import TabsStore from '../../../stores/TabsStore';
import Header from '../../../../Common/components/Header';
import LandingSection from '../../../components/RequestsData/LandingSection';

interface Props {
  tabsStore: TabsStore;
}

@inject('tabsStore')
@observer
class RequestsHomePage extends Component<Props> {
  render() {
    const { tabsStore } = this.props;

    return (
      <MainContainer>
        <Header />
        <LandingSection tabsStore={tabsStore} />
      </MainContainer>
    );
  }
}

export default RequestsHomePage;
