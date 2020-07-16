import React, { Component } from 'react';

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
import { EachResourceFetchType } from '../../../../../stores/types';

interface Props {
  eachResource: EachResourceFetchType;
}

class EachResourceCard extends Component<Props> {
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
          <Logo src={logoImageUrl} alt='icon logo' />
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

export default EachResourceCard;
