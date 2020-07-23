import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';

import BackButton from '../../../../../Common/components/BackButton';
import LoadingWrapper from '../../../../../Common/components/LoadingWrapper';
import ResponsiveContainer from '../../../../../Common/components/ResponsiveContainer';

import {
  ResourceItemType,
  resourceItemsDeleteRequestType,
} from '../../../../stores/types';
import ResourcesStore from '../../../../stores/ResourcesStore';
import { navigateToResourceAddItemPage } from '../../../../utils/navigationUtils';

import ResourceDetailedView from './ResourceDetailedView';
import ResourceItemsListData from './ResourceItemsListData';

interface Props {
  history: History;
  resourcesStore: ResourcesStore;
}

@observer
class LandingSection extends Component<Props> {
  resourceName: string = '';
  onSuccess = () => {};

  onDeleteResourceItems = (items: number[]) => {
    const { resourcesStore } = this.props;
    const request = items.map((eachItemId) => {
      const eachItem = { id: eachItemId };
      return eachItem;
    });

    resourcesStore.getResourceItemsAfterDeleteAPI(request, this.onSuccess);
  };

  onUpdateResourceItem = (item: ResourceItemType) => {};

  onAddResourceItem = () => {
    const { history } = this.props;

    navigateToResourceAddItemPage(history, this.resourceName);
    window.location.reload();
  };

  componentDidMount() {
    const { resourcesStore } = this.props;
    let path = '';
    if (typeof window !== 'undefined') {
      path = window.location.pathname;
      const pathParameters = path.split('/');
      path = pathParameters[pathParameters.length - 1];
    }

    this.resourceName = path;

    resourcesStore.getResourceDetailsAPI(
      { resource_name: path },
      this.onSuccess
    );
  }

  render() {
    const { resourcesStore } = this.props;

    if (resourcesStore.resourceDetailsData) {
      const {
        resourceDetailsData,
        getResourceDetailsDataAPIStatus,
        getResourcesAfterDeleteAPIStatus,
      } = resourcesStore;

      return (
        <div>
          <ResponsiveContainer>
            <BackButton />
            <LoadingWrapper
              apiStatus={getResourceDetailsDataAPIStatus}
              onRetry={() => {}}
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
        </div>
      );
    }
  }
}

export default LandingSection;
