import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';

import BackButton from '../../../../../Common/components/BackButton';
import LoadingWrapper from '../../../../../Common/components/LoadingWrapper';
import ResponsiveContainer from '../../../../../Common/components/ResponsiveContainer';

import ResourcesStore from '../../../../stores/ResourcesStore';
import { navigateToResourceAddItemPage } from '../../../../utils/navigationUtils';

import ResourceDetailedView from './ResourceDetailedView';
import ResourceItemsListData from './ResourceItemsListData';

interface Props {
  history: History;
  resourcesStore: ResourcesStore;
  resourceName: string;
}

@observer
class LandingSection extends Component<Props> {
  onSuccess = () => {};

  onDeleteResourceItems = (items: number[]) => {
    const { resourcesStore } = this.props;
    const request = items.map((eachItemId) => {
      const eachItem = { id: eachItemId };
      return eachItem;
    });

    resourcesStore.getResourceItemsAfterDeleteAPI(request, this.onSuccess);
  };

  onAddResourceItem = () => {
    const { history, resourceName } = this.props;

    navigateToResourceAddItemPage(history, resourceName);
    window.location.reload();
  };

  handleRetry = () => {
    const { resourcesStore, resourceName } = this.props;

    resourcesStore.getResourceDetailsAPI(
      { resource_name: resourceName },
      this.onSuccess
    );
  };

  render() {
    const { resourcesStore } = this.props;

    const {
      resourceDetailsData,
      getResourceDetailsDataAPIStatus,
      getResourcesAfterDeleteAPIStatus,
    } = resourcesStore;

    return (
      <ResponsiveContainer>
        <BackButton />
        <LoadingWrapper
          apiStatus={getResourceDetailsDataAPIStatus}
          onRetry={this.handleRetry}
        >
          <ResourceDetailedView resourceDetailsData={resourceDetailsData} />
          <ResourceItemsListData
            resourceDetailsData={resourceDetailsData}
            onDeleteResourceItems={this.onDeleteResourceItems}
            onDeleteAPIStatus={getResourcesAfterDeleteAPIStatus}
            onAddResourceItem={this.onAddResourceItem}
          />
        </LoadingWrapper>
      </ResponsiveContainer>
    );
  }
}

export default LandingSection;
