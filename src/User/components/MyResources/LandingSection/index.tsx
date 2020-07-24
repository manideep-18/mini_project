import React, { Component } from 'react';
import { History } from 'history';
import { ResourcesDetailsContainer } from './styledComponents';
import ResponsiveContainer from '../../../../Common/components/ResponsiveContainer';
import TabsSwitchStore from '../../../stores/TabsSwitchStore';
import { nameSpacesConversion } from '../../../../Common/utils/StringConversionUtils';
import { goToUserTabActivePage } from '../../../utils/NavigationUtils';
import TabsSection from '../../../common/Components/TabsSection';

interface Props {
  history: History;
  tabsSwitchStore: TabsSwitchStore;
}

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
      <ResourcesDetailsContainer>
        <ResponsiveContainer>
          <TabsSection
            tabStatus={tabStatus}
            onTabStatusChanged={this.handleTabStatusChange}
          />
        </ResponsiveContainer>
      </ResourcesDetailsContainer>
    );
  }
}

export default LandingSection;
