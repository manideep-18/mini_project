import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';
import { withRouter } from 'react-router-dom';

import TabsSwitch from '../../../../Common/components/TabsSwitch';

import TabsStore from '../../../stores/TabsStore';

import { MainContainer } from './styledComponents';

interface Props {
  history: History;
  match: any;
  location: any;
  tabsStore: TabsStore;
}

@observer
class LandingSection extends Component<Props> {
  handleUpdateTabs = (status: string) => {
    const { tabsStore, history } = this.props;
    const { updateTabStatus } = tabsStore;
    updateTabStatus(status);
  };

  render() {
    const { tabsStore, history } = this.props;
    const { tabStatus } = tabsStore;
    return (
      <MainContainer>
        <TabsSwitch
          history={history}
          tabStatus={tabStatus}
          onUpdateTabs={this.handleUpdateTabs}
        />
      </MainContainer>
    );
  }
}

export default withRouter(LandingSection);
