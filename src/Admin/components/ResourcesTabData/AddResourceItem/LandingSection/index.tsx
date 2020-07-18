import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import ResponsiveContainer from '../../../../../Common/components/ResponsiveContainer';
import LoadingWrapper from '../../../../../Common/components/LoadingWrapper';
import { goToAdminPage } from '../../../../../Common/utils/navigationUtils';
import ResourceItemsFields from '../../../../../Common/components/ResourceItemsFields';

import ResourcesStore from '../../../../stores/ResourcesStore';
import {
  EachResourceFetchType,
  ResourceItemType,
} from '../../../../stores/types';

import { LogoImage, FieldsImageContainer } from './styledComponents';

interface Props {
  history: History;
  match: any;
  location: any;
  resourcesStore: ResourcesStore;
  resourceLogoImageUrl?: string;
}

@inject('resourcesStore')
@observer
class LandingSection extends Component<Props> {
  static defaultProps = {
    resourceLogoImageUrl:
      'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/61afd424-c83b-4d35-90ee-8222e064e6f6.png',
  };

  onSuccess = () => {
    const { history } = this.props;
    goToAdminPage(history);
  };

  onAddResource = (
    name: string,
    resourceName: string,
    link: string,
    description: string
  ) => {
    const { resourcesStore } = this.props;
    const eachResource: ResourceItemType = {
      id: 176,
      title: name,
      resourceName: resourceName,
      link: link,
      description: description,
    };
  };

  render() {
    const { resourcesStore, resourceLogoImageUrl } = this.props;
    const { updateResourcesDataAPIStatus } = resourcesStore;
    return (
      <ResponsiveContainer>
        <FieldsImageContainer>
          <ResourceItemsFields onAddResource={this.onAddResource} />
          <LogoImage src={resourceLogoImageUrl} alt='resource logo' />
        </FieldsImageContainer>
      </ResponsiveContainer>
    );
  }
}

export default withRouter(LandingSection);
