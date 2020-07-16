import React, { Component } from 'react';

import { MainContainer } from './styledComponents';
import Header from '../../../Common/components/Header';
import TabsStore from '../../stores/TabsStore';
import { observer, inject } from 'mobx-react';
import LandingSection from './LandingSection';

interface Props {
  tabsStore: TabsStore;
}

@inject('tabsStore', 'resourcesStore')
@observer
class Homepage extends Component<Props> {
  render() {
    const { tabsStore, resourcesStore } = this.props;

    return (
      <MainContainer>
        <Header />
        <LandingSection tabsStore={tabsStore} resourcesStore={resourcesStore} />
      </MainContainer>
    );
  }
}

export default Homepage;
