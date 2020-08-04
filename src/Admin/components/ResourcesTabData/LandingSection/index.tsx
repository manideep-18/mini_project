import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';

import TabsStore from '../../../stores/TabsStore';
import ResourcesStore from '../../../stores/ResourcesStore';
import TabsSwitch from '../../common/TabsSwitch';

import { MainContainer } from './styledComponents';
import ResourcesTabContent from './ResourcesTabContent';

interface Props {
  history: History;
  tabsStore: TabsStore;
  resourcesStore: ResourcesStore;
}

@observer
class LandingSection extends Component<Props> {
  handleUpdateTabs = (status: string): void => {
    const { tabsStore } = this.props;
    const { updateTabStatus } = tabsStore;
    updateTabStatus(status);
  };

  render(): React.ReactNode {
    const { tabsStore, history, resourcesStore } = this.props;
    const { tabStatus } = tabsStore;
    return (
      <MainContainer id='resourcesDataLandingSection'>
        <TabsSwitch
          history={history}
          tabStatus={tabStatus}
          onUpdateTabs={this.handleUpdateTabs}
        />
        <ResourcesTabContent
          history={history}
          resourcesStore={resourcesStore}
        />
        ;
      </MainContainer>
    );
  }
}

export default LandingSection;
