import React, { Component } from 'react';

import { MainContainer } from './styledComponents';
import { observer } from 'mobx-react';
import TabsSwitch from './TabsSwitch';
import TabsStore from '../../../stores/TabsStore';
import ResourcesStore from '../../../stores/ResourcesStore';

interface Props {
  tabsStore: TabsStore;
  resourcesStore: ResourcesStore;
}

@observer
class LandingSection extends Component<Props> {
  handleUpdateTabs = (status: string) => {
    const { tabsStore } = this.props;
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
    const { tabsStore, resourcesStore } = this.props;
    const { tabStatus } = tabsStore;
    return (
      <MainContainer>
        <TabsSwitch
          tabStatus={tabStatus}
          onUpdateTabs={this.handleUpdateTabs}
        />
        {this.renderTabsContent()}
      </MainContainer>
    );
  }
}

export default LandingSection;
