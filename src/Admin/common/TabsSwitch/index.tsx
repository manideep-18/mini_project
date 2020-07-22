import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';

import TabButton from '../../../Common/components/TabButton';

import { TabsSwitchContainer } from './styledComponents';
import { goToTabActivePage } from '../../utils/navigationUtils';

interface Props {
  history: History;
  tabStatus: string;
  onUpdateTabs: Function;
}

@observer
class TabsSwitch extends Component<Props> {
  onUpdateTabStatus = (status: string) => {
    const { onUpdateTabs, history, tabStatus } = this.props;
    onUpdateTabs(status);
    goToTabActivePage(history, status.toLowerCase());
  };

  render() {
    const { tabStatus } = this.props;
    return (
      <TabsSwitchContainer>
        <TabButton
          text='Resources'
          onClick={this.onUpdateTabStatus}
          tabStatus={tabStatus}
        />
        <TabButton
          text='Requests'
          onClick={this.onUpdateTabStatus}
          tabStatus={tabStatus}
        />
        <TabButton
          text='Users'
          onClick={this.onUpdateTabStatus}
          tabStatus={tabStatus}
        />
      </TabsSwitchContainer>
    );
  }
}

export default TabsSwitch;
