import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

import BackButton from '../../../../../Common/components/BackButton';
import LoadingWrapper from '../../../../../Common/components/LoadingWrapper';
import ResponsiveContainer from '../../../../../Common/components/ResponsiveContainer';

import { ResourceItemType } from '../../../../stores/types';
import ResourcesStore from '../../../../stores/ResourcesStore';
import { navigateToResourceAddItemPage } from '../../../../utils/navigationUtils';

import ResourceDetailedView from './ResourceDetailedView';
import ResourceItemsListData from './ResourceItemsListData';

interface Props {
  history: History;
  match: any;
  location: any;
  resourcesStore: ResourcesStore;
}

@observer
class LandingSection extends Component<Props> {
  onSuccess = () => {};

  onDeleteResourceItems = (items: ResourceItemType[]) => {
    const { resourcesStore } = this.props;

    resourcesStore.getResourceItemsAfterDeleteAPI(items, this.onSuccess);
  };

  onAddResourceItem = () => {
    const { history } = this.props;
    let path;
    if (typeof window !== 'undefined') {
      path = window.location.pathname;
      const pathParameters = path.split('/');
      path = pathParameters[pathParameters.length - 1];
      navigateToResourceAddItemPage(history, path);
      window.location.reload();
    }
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

      console.log(getResourceDetailsDataAPIStatus, '&&');

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
                onAddResourceItem={this.onAddResourceItem}
              />
            </LoadingWrapper>
          </ResponsiveContainer>
        </div>
      );
    }
    return 'mani';
  }
}

export default withRouter(LandingSection);
