import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

import Header from '../../../../Common/components/Header';

import LandingSection from '../../../components/ResourcesTabData/AddResourceItem/LandingSection';
import { inject, observer } from 'mobx-react';
import ResourcesStore from '../../../stores/ResourcesStore';

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
      <div>
        <Header />
        <LandingSection history={history} resourcesStore={resourcesStore} />
      </div>
    );
  }
}

export default withRouter(AddItemPage);
