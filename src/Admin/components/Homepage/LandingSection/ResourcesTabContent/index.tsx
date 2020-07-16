import React, { Component } from 'react';
import EachResourceCard from './EachResourceCard';
import ResourcesStore from '../../../../stores/ResourcesStore';
import { toJS } from 'mobx';
import {
  ResourcesFetchResponse,
  EachResourceFetchType,
} from '../../../../stores/types';
import console from 'console';
import { observer } from 'mobx-react';
import { ResourcesCardsContainer } from './styledComponents';
import ResponsiveContainer from '../../../../../Common/components/ResponsiveContainer';
import LoadingWrapper from '../../../../../Common/components/LoadingWrapper';

interface Props {
  resourcesStore: ResourcesStore;
}

@observer
class ResourcesTabContent extends Component<Props> {
  // resourceData: ResourcesFetchResponse = [];

  renderResourcesCards = () => {
    const { resourcesStore } = this.props;
    const { resourcesFetchData } = resourcesStore;

    if (resourcesFetchData)
      return resourcesFetchData.resources_data.map((eachResource) => (
        <EachResourceCard eachResource={eachResource} />
      ));
    return null;
  };

  handleRetry = () => {
    const { resourcesStore } = this.props;
    resourcesStore.getResourcesDataAPI({}, this.onSuccess);
  };

  onSuccess = () => {
    const { resourcesStore } = this.props;
    const { resourcesFetchData } = resourcesStore;
    // this.resourceData = resourcesFetchData;
  };

  componentDidMount() {
    const { resourcesStore } = this.props;
    resourcesStore.getResourcesDataAPI({}, this.onSuccess);
  }

  render() {
    const { resourcesStore } = this.props;
    const { getResourcesDataAPIStatus } = resourcesStore;
    return (
      <ResponsiveContainer>
        <LoadingWrapper
          apiStatus={getResourcesDataAPIStatus}
          failureText='Page not loaded'
          onRetry={this.handleRetry}
        >
          <ResourcesCardsContainer>
            {this.renderResourcesCards()}
          </ResourcesCardsContainer>
        </LoadingWrapper>
      </ResponsiveContainer>
    );
  }
}

export default ResourcesTabContent;
