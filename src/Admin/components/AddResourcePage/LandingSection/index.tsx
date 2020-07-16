import React, { Component } from 'react';
import ResponsiveContainer from '../../../../Common/components/ResponsiveContainer';
import AddResourceFields from './AddResourceFields';
import { LogoImage, FieldsImageContainer } from './styledComponents';
import ResourcesStore from '../../../stores/ResourcesStore';
import { EachResourceFetchType } from '../../../stores/types';
import { observer, inject } from 'mobx-react';
import LoadingWrapper from '../../../../Common/components/LoadingWrapper';
import { navigate } from '@reach/router';
import { goToAdminPage } from '../../../../Common/utils/navigationUtils';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

interface State {
  fileUploaded: string;
}

interface Props {
  history: History;
  match: any;
  location: any;
  resourcesStore: ResourcesStore;
}

@inject('resourcesStore')
@observer
class LandingSection extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      fileUploaded:
        'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/61afd424-c83b-4d35-90ee-8222e064e6f6.png',
    };
  }

  onFileUploadChange = (fileName: any) => {
    this.setState({ fileUploaded: fileName });
  };

  onSuccess = () => {
    const { history } = this.props;
    goToAdminPage(history);
  };

  onAddResource = (name: string, link: string, description: string) => {
    const { fileUploaded } = this.state;
    const { resourcesStore } = this.props;
    const eachResource: EachResourceFetchType = {
      resourceName: name,
      logoImageUrl: fileUploaded,
      resourceLink: link,
      resourceDescription: description,
      resourceType: 'cloud services',
    };

    resourcesStore.updateResourcesDataAPI(eachResource, this.onSuccess);
  };

  render() {
    const { fileUploaded } = this.state;
    const { resourcesStore } = this.props;
    const { updateResourcesDataAPIStatus } = resourcesStore;
    return (
      <ResponsiveContainer>
        <LoadingWrapper
          apiStatus={updateResourcesDataAPIStatus}
          onRetry={this.onAddResource}
          failureText='page not found'
        >
          <FieldsImageContainer>
            <AddResourceFields
              onFileUploadChange={this.onFileUploadChange}
              onAddResource={this.onAddResource}
            />
            <LogoImage src={fileUploaded} alt='resource logo' />
          </FieldsImageContainer>
        </LoadingWrapper>
      </ResponsiveContainer>
    );
  }
}

export default withRouter(LandingSection);
