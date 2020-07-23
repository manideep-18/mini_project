import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

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
  render() {
    const { resourcesStore, history } = this.props;
    return (
      <DetailsPageMainContainer>
        <Header />
        <LandingSection history={history} resourcesStore={resourcesStore} />
      </DetailsPageMainContainer>
    );
  }
}

export default withRouter(ResourceDetailsPage);
