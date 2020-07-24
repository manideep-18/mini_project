import React, { Component } from 'react';
import { History } from 'history';
import { observer } from 'mobx-react';

import ResponsiveContainer from '../../../../Common/components/ResponsiveContainer';
import { nameSpacesConversion } from '../../../../Common/utils/StringConversionUtils';

import TabsSwitchStore from '../../../stores/TabsSwitchStore';
import TabsSection from '../../../common/Components/TabsSection';
import { goToUserTabActivePage } from '../../../utils/NavigationUtils';

import { TabsAndResourcesListContainer } from './styledComponents';

interface Props {
  history: History;
  tabsSwitchStore: TabsSwitchStore;
}

@observer
export class LandingSection extends Component<Props> {
  handleTabStatusChange = (value: string) => {
    const { tabsSwitchStore, history } = this.props;
    const { updateTabStatus } = tabsSwitchStore;

    updateTabStatus(value);
    goToUserTabActivePage(history, nameSpacesConversion(value));
  };

  render() {
    const { tabsSwitchStore } = this.props;
    const { tabStatus } = tabsSwitchStore;
    return (
      <TabsAndResourcesListContainer>
        <ResponsiveContainer>
          <TabsSection
            tabStatus={tabStatus}
            onTabStatusChanged={this.handleTabStatusChange}
          />
        </ResponsiveContainer>
      </TabsAndResourcesListContainer>
    );
  }
}

export default LandingSection;
