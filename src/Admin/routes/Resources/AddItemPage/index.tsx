import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import { inject, observer } from 'mobx-react';

import Header from '../../../../Common/components/Header';
import LandingSection from '../../../components/ResourcesTabData/AddResourceItem/LandingSection';
import ResourcesStore from '../../../stores/ResourcesStore';

import { ItemPageMainContainer } from './styled-components';

interface Props {
  history: History;
  match: any;
  location: any;
  resourcesStore: ResourcesStore;
}

@inject('resourcesStore')
@observer
class AddItemPage extends Component<Props> {
  render() {
    const { resourcesStore, history } = this.props;
    return (
      <ItemPageMainContainer>
        <Header />
        <LandingSection history={history} resourcesStore={resourcesStore} />
      </ItemPageMainContainer>
    );
  }
}

export default withRouter(AddItemPage);
