import React, { Component } from 'react';
import { observer } from 'mobx-react';

import ResourcesStore from '../../../stores/ResourcesStore';

import BackButton from '../../../../Common/components/BackButton';

import ResourceDetailedView from './ResourceDetailedView';
import { toJS } from 'mobx';
import LoadingWrapper from '../../../../Common/components/LoadingWrapper';
import ResourceItemsListData from './ResourceItemsListData';
import ResponsiveContainer from '../../../../Common/components/ResponsiveContainer';

interface Props {
  resourcesStore: ResourcesStore;
}

@observer
class LandingSection extends Component<Props> {
  render() {
    const { resourcesStore } = this.props;

    if (resourcesStore.resourceDetailsData) {
      const {
        resourceDetailsData,
        getResourceDetailsDataAPIStatus,
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
