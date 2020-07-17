import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Header from '../../../Common/components/Header';

import TabsStore from '../../stores/TabsStore';
import ResourcesStore from '../../stores/ResourcesStore';
import LandingSection from '../../components/Home/LandingSection';

import { MainContainer } from './styledComponents';

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
