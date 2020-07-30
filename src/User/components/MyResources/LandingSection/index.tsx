import React, { Component } from 'react';
import { History } from 'history';
import { ResourcesDetailsContainer } from './styledComponents';
import ResponsiveContainer from '../../../../Common/components/ResponsiveContainer';
import TabsSwitchStore from '../../../stores/TabsSwitchStore';
import { nameSpacesConversion } from '../../../../Common/utils/StringConversionUtils';
import { goToUserTabActivePage } from '../../../utils/NavigationUtils';
import TabsSection from '../../../common/Components/TabsSection';
import MyResourcesStore from '../../../stores/MyResourcesStore';
import LoadingWrapper from '../../../../Common/components/LoadingWrapper';
import BaseTableWithoutCheckbox from '../../../../Common/components/BaseTableWithoutCheckbox';
import { myResourcesTableHeaderConstants } from '../../../constants/TableHeaderConstants';
import { observer } from 'mobx-react';
import SearchAndFilterAndButtons from '../../../../Common/components/SearchAndFilterAndButtons';
import {
  userSortConstants,
  userFilterConstants,
} from '../../../constants/DropdownConstants';

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

  handleSortTypeUpdate = (value: string) => {
    const { myResourcesStore } = this.props;
    const { setSortType } = myResourcesStore;
    setSortType(value);
  };

  handleFilterTypeUpdate = (value: string) => {
    const { myResourcesStore } = this.props;
    const { setFilterType } = myResourcesStore;
    setFilterType(value);
  };

  onSuccess = () => {};

  handleRetry = () => {
    const { myResourcesStore } = this.props;

    myResourcesStore.getMyResourcesDataAPI(this.onSuccess);
  };

  componentDidMount() {
    const { myResourcesStore } = this.props;

    myResourcesStore.getMyResourcesDataAPI(this.onSuccess);
  }

  render() {
    const { tabsSwitchStore, myResourcesStore } = this.props;
    const { tabStatus } = tabsSwitchStore;
    const {
      sortedDataWithFiltered,
      getMyResourcesDataAPIStatus,
    } = myResourcesStore;

    return (
      <ResourcesDetailsContainer>
        <ResponsiveContainer>
          <TabsSection
            tabStatus={tabStatus}
            onTabStatusChanged={this.handleTabStatusChange}
          />
          <SearchAndFilterAndButtons
            onSearchEnter={() => {}}
            checkedItemsLength={0}
            onSortStatusUpdate={this.handleSortTypeUpdate}
            onFilterStatusUpdate={this.handleFilterTypeUpdate}
            sortConstants={userSortConstants}
            filterConstants={userFilterConstants}
          />
          <LoadingWrapper
            apiStatus={getMyResourcesDataAPIStatus}
            onRetry={this.handleRetry}
          >
            <BaseTableWithoutCheckbox
              headerArray={myResourcesTableHeaderConstants}
              dataArray={sortedDataWithFiltered}
              onClickItemCard={() => {}}
            />
          </LoadingWrapper>
        </ResponsiveContainer>
      </ResourcesDetailsContainer>
    );
  }
}

export default LandingSection;
