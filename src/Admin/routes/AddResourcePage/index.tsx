import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import BackButton from '../../../Common/components/BackButton';
import Header from '../../../Common/components/Header';

import LandingSection from '../../components/AddResource/LandingSection';
import ResourcesStore from '../../stores/ResourcesStore';

import { AddResourceMainContainer } from './styledComponents';

interface Props {
  resourcesStore: ResourcesStore;
}

@inject('resourcesStore')
@observer
class AddResourcePage extends Component<Props> {
  render() {
    const { resourcesStore } = this.props;
    return (
      <AddResourceMainContainer>
        <Header />
        <BackButton />
        <LandingSection resourcesStore={resourcesStore} />
      </AddResourceMainContainer>
    );
  }
}

export default AddResourcePage;
