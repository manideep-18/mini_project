import React, { Component } from 'react';
import { observer } from 'mobx-react';

import BackButton from '../../../../Common/components/BackButton';
import LoadingWrapper from '../../../../Common/components/LoadingWrapper';
import ResponsiveContainer from '../../../../Common/components/ResponsiveContainer';

import { ResourceItemType } from '../../../stores/types';
import ResourcesStore from '../../../stores/ResourcesStore';

import ResourceDetailedView from './ResourceDetailedView';
import ResourceItemsListData from './ResourceItemsListData';

interface Props {
  resourcesStore: ResourcesStore;
}

@observer
class LandingSection extends Component<Props> {
  onSuccess = () => {};

  onDeleteResourceItems = (items: ResourceItemType[]) => {
    const { resourcesStore } = this.props;

    resourcesStore.getResourceItemsAfterDeleteAPI(items, this.onSuccess);
  };

  render() {
    const { resourcesStore } = this.props;

    if (resourcesStore.resourceDetailsData) {
      const {
        resourceDetailsData,
        getResourceDetailsDataAPIStatus,
        getResourcesAfterDeleteAPIStatus,
      } = resourcesStore;
      const { resource_details, resource_items_details } = resourceDetailsData;

      return (
        <div>
          <ResponsiveContainer>
            <BackButton />
            <LoadingWrapper
              apiStatus={getResourceDetailsDataAPIStatus}
              onRetry={() => {}}
            >
              <ResourceDetailedView resourceDetails={resource_details} />
              <ResourceItemsListData
                resourceItemDetails={resource_items_details}
                onDeleteResourceItems={this.onDeleteResourceItems}
                onDeleteAPIStatus={getResourcesAfterDeleteAPIStatus}
              />
            </LoadingWrapper>
          </ResponsiveContainer>
        </div>
      );
    }
    return 'mani';
  }
}

export default LandingSection;
