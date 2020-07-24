import React, { Component } from 'react';
import { observer } from 'mobx-react';

import TabButton from '../../../../Common/components/TabButton';

import { TabsContainer } from './styledComponents';

interface Props {
  tabStatus: string;
  onTabStatusChanged: (value: string) => void;
}

@observer
class TabsSection extends Component<Props> {
  handleTabStatus = (value: string) => {
    const { onTabStatusChanged } = this.props;

    onTabStatusChanged(value);
  };

  render() {
    const { tabStatus } = this.props;
    return (
      <TabsContainer>
        <TabButton
          text='My Resources'
          onClick={this.handleTabStatus}
          tabStatus={tabStatus}
        />
        <TabButton
          text='My Requests'
          onClick={this.handleTabStatus}
          tabStatus={tabStatus}
        />
      </TabsContainer>
    );
  }
}

export default TabsSection;
