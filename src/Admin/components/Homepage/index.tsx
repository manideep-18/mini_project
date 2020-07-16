import React, { Component } from 'react';

import { MainContainer } from './styledComponents';
import Header from '../../../Common/components/Header';
import TabsStore from '../../stores/TabsStore';
import { observer, inject } from 'mobx-react';
import LandingSection from './LandingSection';
import ResourcesStore from '../../stores/ResourcesStore';

interface Props {
  tabsStore: TabsStore;
  resourcesStore: ResourcesStore;
}

@inject('tabsStore', 'resourcesStore')
@observer
class Homepage extends Component<Props> {
  render() {
    const { tabsStore, resourcesStore } = this.props;
    const { tabStatus } = tabsStore;
    return (
      <MainContainer>
        <Header isAdmin tabStatus={tabStatus} />
        <LandingSection tabsStore={tabsStore} resourcesStore={resourcesStore} />
      </MainContainer>
    );
  }
}

export default Homepage;
