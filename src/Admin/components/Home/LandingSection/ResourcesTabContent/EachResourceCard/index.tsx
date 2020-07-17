import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

import { EachResourceFetchType } from '../../../../../stores/types';
import { goToAdminResourcePage } from '../../../../../utils/navigationUtils';

import {
  CardContainer,
  LogoTextContainer,
  Logo,
  TextContainer,
  ResourceType,
  ResourceName,
  ResourceLink,
  ResourceDescription,
} from './styledComponents';

interface Props {
  history: History;
  match: any;
  location: any;
  eachResource: EachResourceFetchType;
  onClickResourceCard: (resource: EachResourceFetchType) => void;
}

class EachResourceCard extends Component<Props> {
  handleClick = () => {
    const { onClickResourceCard, eachResource, history } = this.props;
    onClickResourceCard(eachResource);
    goToAdminResourcePage(history, eachResource.resourceName);
  };

  render() {
    const { eachResource } = this.props;
    const {
      logoImageUrl,
      resourceName,
      resourceType,
      resourceLink,
      resourceDescription,
    } = eachResource;
    return (
      <CardContainer>
        <LogoTextContainer>
          <Logo src={logoImageUrl} alt='icon logo' onClick={this.handleClick} />
          <TextContainer>
            <ResourceName>{resourceName}</ResourceName>
            <ResourceType>{resourceType}</ResourceType>
          </TextContainer>
        </LogoTextContainer>
        <ResourceLink as='a'>{resourceLink}</ResourceLink>
        <ResourceDescription>{resourceDescription}</ResourceDescription>
      </CardContainer>
    );
  }
}

export default withRouter(EachResourceCard);
