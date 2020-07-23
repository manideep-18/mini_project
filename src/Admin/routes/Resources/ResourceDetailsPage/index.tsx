import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import { observable } from 'mobx';

import Header from '../../../../Common/components/Header';

import LandingSection from '../../../components/ResourcesTabData/ResourceDetails/LandingSection';
import ResourcesStore from '../../../stores/ResourcesStore';

import { DetailsPageMainContainer } from './styledComponents';

interface Props {
  history: History;
  location: any;
  match: any;
  resourcesStore: ResourcesStore;
}

@inject('resourcesStore')
@observer
class ResourceDetailsPage extends Component<Props> {
  @observable resourceName: string;

  constructor(props: Props) {
    super(props);
    this.resourceName = '';
  }

  onSuccess = () => {};

  componentDidMount() {
    const { resourcesStore } = this.props;
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const pathParameters = path.split('/');
      this.resourceName = pathParameters[pathParameters.length - 1];
    }

    resourcesStore.getResourceDetailsAPI(
      { resource_name: this.resourceName },
      this.onSuccess
    );
  }

  render() {
    const { resourcesStore, history } = this.props;
    return (
      <DetailsPageMainContainer>
        <Header />
        <LandingSection
          resourceName={this.resourceName}
          history={history}
          resourcesStore={resourcesStore}
        />
      </DetailsPageMainContainer>
    );
  }
}

export default withRouter(ResourceDetailsPage);
