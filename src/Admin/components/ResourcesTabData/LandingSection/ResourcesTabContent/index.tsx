import React, { Component } from 'react';
import { observer } from 'mobx-react';

import ResponsiveContainer from '../../../../../Common/components/ResponsiveContainer';
import LoadingWrapper from '../../../../../Common/components/LoadingWrapper';

import ResourcesStore from '../../../../stores/ResourcesStore';

import EachResourceCard from './EachResourceCard';
import { ResourcesCardsContainer } from './styledComponents';
import { EachResourceFetchType } from '../../../../stores/types';

interface Props {
  resourcesStore: ResourcesStore;
}

@observer
class ResourcesTabContent extends Component<Props> {
  onClickResourceCard = (resource: EachResourceFetchType) => {
    const { resourcesStore } = this.props;
    resourcesStore.getResourceDetailsAPI(resource);
  };

  renderResourcesCards = () => {
    const { resourcesStore } = this.props;
    const { resourcesFetchData } = resourcesStore;

    if (resourcesFetchData)
      return resourcesFetchData.resources_data.map((eachResource) => (
        <EachResourceCard
          key={eachResource.resourceName}
          eachResource={eachResource}
          onClickResourceCard={this.onClickResourceCard}
        />
      ));
    return null;
  };

  handleRetry = () => {
    const { resourcesStore } = this.props;
    resourcesStore.getResourcesDataAPI({}, this.onSuccess);
  };

  onSuccess = () => {};

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
