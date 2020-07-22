import React, { Component } from 'react';
import { History } from 'history';
import { withRouter } from 'react-router-dom';

import TabsStore from '../../../stores/TabsStore';
import TabsSwitch from '../../../../Common/components/TabsSwitch';

import { LandingMainContainer } from './styledComponents';

interface Props {
  history: History;
  match: any;
  location: any;
  tabsStore: TabsStore;
}

class LandingSection extends Component<Props> {
  handleUpdateTabs = (status: string) => {
    const { tabsStore, history } = this.props;
    const { updateTabStatus } = tabsStore;
    updateTabStatus(status);
  };

  componentDidMount() {
    const { tabsStore, history } = this.props;
    const { updateTabStatus } = tabsStore;
    updateTabStatus('Users');
  }

  render() {
    const { tabsStore, history } = this.props;
    const { tabStatus } = tabsStore;
    return (
      <LandingMainContainer>
        <TabsSwitch
          history={history}
          tabStatus={tabStatus}
          onUpdateTabs={this.handleUpdateTabs}
        />
      </LandingMainContainer>
    );
  }
}

export default withRouter(LandingSection);
