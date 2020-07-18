import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';

import TabsStore from '../../../stores/TabsStore';
import ResourcesStore from '../../../stores/ResourcesStore';

import { MainContainer } from './styledComponents';
import { withRouter } from 'react-router-dom';

import TabsSwitch from '../../../../Common/components/TabsSwitch';
import ResourcesTabContent from './ResourcesTabContent';

interface Props {
  history: History;
  match: any;
  location: any;
  tabsStore: TabsStore;
  resourcesStore: ResourcesStore;
}

@observer
class LandingSection extends Component<Props> {
  handleUpdateTabs = (status: string) => {
    const { tabsStore, history } = this.props;
    const { updateTabStatus } = tabsStore;
    updateTabStatus(status);
  };

  renderTabsContent = () => {
    const { tabsStore, resourcesStore } = this.props;
    const { tabStatus } = tabsStore;

    switch (tabStatus) {
      case 'Resources':
        return <ResourcesTabContent resourcesStore={resourcesStore} />;
      default:
        return null;
    }
  };

  render() {
    const { tabsStore, history, resourcesStore } = this.props;
    const { tabStatus } = tabsStore;
    return (
      <MainContainer>
        <TabsSwitch
          history={history}
          tabStatus={tabStatus}
          onUpdateTabs={this.handleUpdateTabs}
        />
        <ResourcesTabContent resourcesStore={resourcesStore} />;
      </MainContainer>
    );
  }
}

export default withRouter(LandingSection);
