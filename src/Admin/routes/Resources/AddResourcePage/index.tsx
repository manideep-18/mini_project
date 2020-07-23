import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

import BackButton from '../../../../Common/components/BackButton';
import Header from '../../../../Common/components/Header';

import LandingSection from '../../../components/ResourcesTabData/AddResource/LandingSection';
import ResourcesStore from '../../../stores/ResourcesStore';

import { AddResourceMainContainer } from './styledComponents';

interface Props {
  history: History;
  location: any;
  match: any;
  resourcesStore: ResourcesStore;
}

@inject('resourcesStore')
@observer
class AddResourcePage extends Component<Props> {
  render() {
    const { resourcesStore, history } = this.props;
    return (
      <AddResourceMainContainer>
        <Header />
        <BackButton />
        <LandingSection history={history} resourcesStore={resourcesStore} />
      </AddResourceMainContainer>
    );
  }
}

export default withRouter(AddResourcePage);
