import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';

import ResponsiveContainer from '../../../../../Common/components/ResponsiveContainer';
import LoadingWrapper from '../../../../../Common/components/LoadingWrapper';

import ResourcesStore from '../../../../stores/ResourcesStore';
import ResourceModal from '../../../../stores/Modals/ResourceModal';
import { goToAdminResourcePage } from '../../../../utils/NavigationUtils';

import EachResourceCard from './EachResourceCard';
import { ResourcesCardsContainer } from './styledComponents';

interface Props {
  resourcesStore: ResourcesStore;
  history: History;
}

@observer
class ResourcesTabContent extends Component<Props> {
  onClickResourceCard = (resource: ResourceModal) => {
    const { history } = this.props;
    goToAdminResourcePage(history, resource.name);
  };

  renderResourcesCards = (): React.ReactNode => {
    const { resourcesStore, history } = this.props;
    const { resourcesFetchData } = resourcesStore;

    return resourcesFetchData.map((eachResource) => (
      <EachResourceCard
        key={eachResource.name}
        history={history}
        eachResource={eachResource}
        onClickResourceCard={this.onClickResourceCard}
      />
    ));
  };

  handleRetry = () => {
    const { resourcesStore } = this.props;
    resourcesStore.getResourcesDataAPI({}, this.onSuccess);
  };

  onSuccess = (): void => {};

  componentDidMount() {
    const { resourcesStore } = this.props;
    resourcesStore.getResourcesDataAPI({}, this.onSuccess);
  }

  render(): React.ReactNode {
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
