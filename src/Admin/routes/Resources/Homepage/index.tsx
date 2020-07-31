import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

import Header from '../../../../Common/components/Header';

import TabsStore from '../../../stores/TabsStore';
import ResourcesStore from '../../../stores/ResourcesStore';
import LandingSection from '../../../components/ResourcesTabData/LandingSection';

import { MainContainer } from './styledComponents';

interface Props {
  history: History;
  location: any;
  match: any;
  tabsStore: TabsStore;
  resourcesStore: ResourcesStore;
}

@inject('tabsStore', 'resourcesStore')
@observer
class ResourcesHomepage extends Component<Props> {
  render() {
    const { tabsStore, resourcesStore, history } = this.props;
    const { tabStatus } = tabsStore;
    return (
      <MainContainer>
        <Header isAdmin tabStatus={tabStatus} />
        <LandingSection
          history={history}
          tabsStore={tabsStore}
          resourcesStore={resourcesStore}
        />
      </MainContainer>
    );
  }
}

export default withRouter(ResourcesHomepage);
