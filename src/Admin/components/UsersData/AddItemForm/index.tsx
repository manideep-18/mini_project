import React, { Component } from 'react';
import { observer } from 'mobx-react';

import ResponsiveContainer from '../../../../Common/components/ResponsiveContainer';
import BackButton from '../../../../Common/components/BackButton';
import { ADMIN_USERS_PAGE } from '../../../../Common/constants/RouteConstants';
import ResourceItemsFields from '../../../../Common/components/ResourceItemsFields';
import LoadingWrapper from '../../../../Common/components/LoadingWrapper';

import UsersStore from '../../../stores/UsersStore';

import { FieldsImageContainer, ProfileImage } from './styledComponents';

interface Props {
  usersStore: UsersStore;
  userProfileImageUrl: string;
}

@observer
class AddItemForm extends Component<Props> {
  static defaultProps = {
    userProfileImageUrl:
      'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/61afd424-c83b-4d35-90ee-8222e064e6f6.png',
  };

  onSuccess = () => {
    window.history.go(-1);
  };

  handleAddItem = (
    name: string,
    resourceName: string,
    link: string,
    description: string
  ) => {
    const { usersStore } = this.props;
    const request = {
      resource_name: resourceName,
      item_name: name,
      link: link,
      description: description,
    };
    usersStore.onAddItemToUserDataAPI(request, this.onSuccess);
  };

  render() {
    const { userProfileImageUrl, usersStore } = this.props;
    const { onAddItemToUserDataAPIStatus } = usersStore;
    return (
      <ResponsiveContainer>
        <BackButton backLinkText={ADMIN_USERS_PAGE} backText='Users' />
        <LoadingWrapper
          apiStatus={onAddItemToUserDataAPIStatus}
          onRetry={this.handleAddItem}
        >
          <FieldsImageContainer>
            <ResourceItemsFields onAddItem={this.handleAddItem} />
            <ProfileImage src={userProfileImageUrl} alt='resource logo' />
          </FieldsImageContainer>
        </LoadingWrapper>
      </ResponsiveContainer>
    );
  }
}

export default AddItemForm;
