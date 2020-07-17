import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Header from '../../../Common/components/Header';

import LandingSection from '../../components/ResourceDetails/LandingSection';
import ResourcesStore from '../../stores/ResourcesStore';

import { DetailsPageMainContainer } from './styledComponents';

interface Props {
  resourcesStore: ResourcesStore;
}

@inject('resourcesStore')
@observer
class ResourceDetailsPage extends Component<Props> {
  render() {
    const { resourcesStore } = this.props;
    return (
      <DetailsPageMainContainer>
        <Header />
        <LandingSection resourcesStore={resourcesStore} />
      </DetailsPageMainContainer>
    );
  }
}

export default ResourceDetailsPage;
