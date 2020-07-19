import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import ResponsiveContainer from '../../../../../Common/components/ResponsiveContainer';
import LoadingWrapper from '../../../../../Common/components/LoadingWrapper';
import { goToAdminPage } from '../../../../../Common/utils/navigationUtils';

import ResourcesStore from '../../../../stores/ResourcesStore';
import { EachResourceFetchType } from '../../../../stores/types';

import AddResourceFields from './AddResourceFields';
import { LogoImage, FieldsImageContainer } from './styledComponents';

interface Props {
  history: History;
  match: any;
  location: any;
  resourcesStore: ResourcesStore;
}

@inject('resourcesStore')
@observer
class LandingSection extends Component<Props> {
  @observable fileUpload: string;
  constructor(props: Props) {
    super(props);
    this.fileUpload =
      'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/61afd424-c83b-4d35-90ee-8222e064e6f6.png';
  }

  onFileUploadChange = (fileName: any) => {
    this.fileUpload = fileName;
  };

  onSuccess = () => {
    const { history } = this.props;
    goToAdminPage(history);
  };

  onAddResource = (name: string, link: string, description: string) => {
    const { resourcesStore } = this.props;
    const eachResource: EachResourceFetchType = {
      name: name,
      logo_image_url: this.fileUpload,
      link: link,
      description: description,
      type: 'cloud services',
      items_list: [],
    };

    resourcesStore.onAddResourceDataAPI(eachResource, this.onSuccess);
  };

  render() {
    const { resourcesStore } = this.props;
    const { onAddResourceDataAPIStatus } = resourcesStore;
    return (
      <ResponsiveContainer>
        <LoadingWrapper
          apiStatus={onAddResourceDataAPIStatus}
          onRetry={this.onAddResource}
          failureText='page not found'
        >
          <FieldsImageContainer>
            <AddResourceFields
              onFileUploadChange={this.onFileUploadChange}
              onAddResource={this.onAddResource}
            />
            <LogoImage src={this.fileUpload} alt='resource logo' />
          </FieldsImageContainer>
        </LoadingWrapper>
      </ResponsiveContainer>
    );
  }
}

export default withRouter(LandingSection);
