import React, { Component } from 'react';
import { AddResourceMainContainer } from './styledComponents';
import BackButton from '../../../Common/components/BackButton';
import Header from '../../../Common/components/Header';
import { observer, inject } from 'mobx-react';
import ResourcesStore from '../../stores/ResourcesStore';
import LandingSection from './LandingSection';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

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
