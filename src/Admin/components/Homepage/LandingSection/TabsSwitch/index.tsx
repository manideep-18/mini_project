import React, { Component } from 'react';
import { TabsSwitchContainer } from './styledComponents';
import TabButton from '../../../../../Common/components/TabButton';
import { observer } from 'mobx-react';

interface Props {
  tabStatus: string;
  onUpdateTabs: Function;
}

@observer
class TabsSwitch extends Component<Props> {
  onUpdateTabStatus = (status: string) => {
    const { onUpdateTabs } = this.props;
    onUpdateTabs(status);
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
          text='Request'
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
