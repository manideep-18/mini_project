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
  AddItemToResourceRequestType,
} from '../../../../stores/types';

import { LogoImage, FieldsImageContainer } from './styledComponents';
import BackButton from '../../../../../Common/components/BackButton';

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

  onSuccess = () => {};

  onAddItemToResource = (
    name: string,
    resourceName: string,
    link: string,
    description: string
  ) => {
    const { resourcesStore } = this.props;

    const itemToAdd: AddItemToResourceRequestType = {
      resource_name: resourceName,
      item_name: name,
      link: link,
      description: description,
    };

    resourcesStore.onAddItemToResourceAPI(itemToAdd, () => {
      window.history.go(-1);
      resourcesStore.getResourceDetailsAPI(
        { resource_name: resourceName },
        this.onSuccess
      );
    });
  };

  render() {
    let resourceName;
    if (typeof window !== 'undefined') {
      resourceName = window.location.pathname;
      const pathParameters = resourceName.split('/');
      resourceName = pathParameters[pathParameters.length - 2];
    }
    const { resourceLogoImageUrl, resourcesStore } = this.props;

    const { onAddItemToResourceAPIStatus } = resourcesStore;
    return (
      <ResponsiveContainer>
        <BackButton />
        <LoadingWrapper
          apiStatus={onAddItemToResourceAPIStatus}
          onRetry={this.onAddItemToResource}
        >
          <FieldsImageContainer>
            <ResourceItemsFields
              onAddItemToResource={this.onAddItemToResource}
              resourceName={resourceName}
            />
            <LogoImage src={resourceLogoImageUrl} alt='resource logo' />
          </FieldsImageContainer>
        </LoadingWrapper>
      </ResponsiveContainer>
    );
  }
}

export default withRouter(LandingSection);
