import React, { Component } from 'react';

import UserModal from '../../../../stores/Modals/UserModal';

import {
  IconContentContainer,
  IconContainer,
  TextsContainer,
  PersonName,
  Department,
  JobRole,
} from './styledComponents';

interface Props {
  userInfoData: UserModal;
}

class UserInfo extends Component<Props> {
  render(): React.ReactNode {
    const { userInfoData } = this.props;

    if (userInfoData) {
      const { department, personName, jobRole } = userInfoData;
      return (
        <IconContentContainer>
          <IconContainer as='div'>PR</IconContainer>
          <TextsContainer>
            <PersonName>{personName}</PersonName>
            <Department>{department}</Department>
            <JobRole>{jobRole}</JobRole>
          </TextsContainer>
        </IconContentContainer>
      );
    }
    return null;
  }
}

export default UserInfo;
