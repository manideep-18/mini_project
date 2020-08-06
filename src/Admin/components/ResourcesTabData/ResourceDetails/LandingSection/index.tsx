import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';

import BackButton from '../../../../../Common/components/BackButton';
import LoadingWrapper from '../../../../../Common/components/LoadingWrapper';
import ResponsiveContainer from '../../../../../Common/components/ResponsiveContainer';

import ResourcesStore from '../../../../stores/ResourcesStore';
import { navigateToResourceAddItemPage } from '../../../../utils/NavigationUtils';

import ResourceDetailedView from './ResourceDetailedView';
import ResourceItemsListData from './ResourceItemsListData';
import SearchBarAndSort from './SearchBarAndSort';
import { DetailsMainContainer } from './styledComponents';

interface Props {
  history: History;
  resourcesStore: ResourcesStore;
  resourceName: string;
}

@observer
class LandingSection extends Component<Props> {
  onSuccess = () => {};

  onDeleteResourceItems = (items: number[]): void => {
    const { resourcesStore } = this.props;
    const request = items.map((eachItemId) => {
      const eachItem = { id: eachItemId };
      return eachItem;
    });

    resourcesStore.getResourceItemsAfterDeleteAPI(request, this.onSuccess);
  };

  onAddResourceItem = (): void => {
    const { history, resourceName } = this.props;

    navigateToResourceAddItemPage(history, resourceName);
    window.location.reload();
  };

  handleSortStatusUpdate = (value: string): void => {
    const { resourcesStore } = this.props;
    resourcesStore.setResourceItemSortType(value);
  };

  handleOnSearchEnter = (value: string): void => {
    const { resourcesStore } = this.props;
    resourcesStore.getSearchResourceItemsDataAPI(this.onSuccess);
  };

  handleRetry = (): void => {
    const { resourcesStore, resourceName } = this.props;

    resourcesStore.getResourceDetailsAPI(
      { resource_name: resourceName },
      this.onSuccess
    );
  };

  render(): React.ReactNode {
    const { resourcesStore } = this.props;

    const {
      sortedResourceItemsData,
      resourceDetailsData,
      getResourceDetailsDataAPIStatus,
      getSearchResourceItemsDataAPIStatus,
      getResourcesAfterDeleteAPIStatus,
    } = resourcesStore;

    return (
      <DetailsMainContainer>
        <BackButton />
        <LoadingWrapper
          apiStatus={getResourceDetailsDataAPIStatus}
          onRetry={this.handleRetry}
        >
          <ResourceDetailedView resourceDetailsData={resourceDetailsData} />
          <SearchBarAndSort
            onSortStatusUpdate={this.handleSortStatusUpdate}
            onEnterPress={this.handleOnSearchEnter}
          />
          <ResourceItemsListData
            resourceItemsData={sortedResourceItemsData}
            onDeleteResourceItems={this.onDeleteResourceItems}
            onDeleteAPIStatus={getResourcesAfterDeleteAPIStatus}
            onAddResourceItem={this.onAddResourceItem}
            onSearchAPIStatus={getSearchResourceItemsDataAPIStatus}
          />
        </LoadingWrapper>
      </DetailsMainContainer>
    );
  }
}

export default LandingSection;
