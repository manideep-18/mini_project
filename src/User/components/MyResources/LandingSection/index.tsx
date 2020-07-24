import React, { Component } from 'react';
import { History } from 'history';
import { observer } from 'mobx-react';

import ResponsiveContainer from '../../../../Common/components/ResponsiveContainer';
import { nameSpacesConversion } from '../../../../Common/utils/StringConversionUtils';

import TabsSwitchStore from '../../../stores/TabsSwitchStore';
import TabsSection from '../../../common/Components/TabsSection';
import { goToUserTabActivePage } from '../../../utils/NavigationUtils';

import { TabsAndResourcesListContainer } from './styledComponents';
import BaseTableWithoutCheckbox from '../../../../Common/components/BaseTableWithoutCheckbox';
import { myResourcesTableHeaderConstants } from '../../../constants/TableHeaderConstants';
import MyResourcesStore from '../../../stores/MyResourcesStore';

interface Props {
  history: History;
  tabsSwitchStore: TabsSwitchStore;
  myResourcesStore: MyResourcesStore;
}

@observer
export class LandingSection extends Component<Props> {
  handleTabStatusChange = (value: string) => {
    const { tabsSwitchStore, history } = this.props;
    const { updateTabStatus } = tabsSwitchStore;

    updateTabStatus(value);
    goToUserTabActivePage(history, nameSpacesConversion(value));
  };

  onSuccess = () => {};

  componentDidMount() {
    const { myResourcesStore } = this.props;
    myResourcesStore.getMyResourcesDataAPI(this.onSuccess);
  }

  render() {
    const { tabsSwitchStore, myResourcesStore } = this.props;
    const { tabStatus } = tabsSwitchStore;
    const { myResourcesDataFetched } = myResourcesStore;
    return (
      <TabsAndResourcesListContainer>
        <ResponsiveContainer>
          <TabsSection
            tabStatus={tabStatus}
            onTabStatusChanged={this.handleTabStatusChange}
          />
          <BaseTableWithoutCheckbox
            headerArray={myResourcesTableHeaderConstants}
            dataArray={myResourcesDataFetched}
            onClickItemCard={() => {}}
          />
        </ResponsiveContainer>
      </TabsAndResourcesListContainer>
    );
  }
}

export default LandingSection;
