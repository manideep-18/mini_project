import React, { Component } from 'react';

import Header from '../../../Common/components/Header';

import LandingSection from '../../components/ResourcesTabData/AddResourceItem/LandingSection';
import { inject, observer } from 'mobx-react';
import ResourcesStore from '../../stores/ResourcesStore';

interface Props {
  resourcesStore: ResourcesStore;
}

@inject('resourcesStore')
@observer
class AddItemPage extends Component<Props> {
  render() {
    const { resourcesStore } = this.props;
    return (
      <div>
        <Header />
        <LandingSection resourcesStore={resourcesStore} />
      </div>
    );
  }
}

export default AddItemPage;
