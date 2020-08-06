import React, { Component } from 'react';
import { History } from 'history';

import ResourceModal from '../../../../../stores/Modals/ResourceModal';

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
  history?: History;
  eachResource: ResourceModal;
  onClickResourceCard: (resource: ResourceModal) => void;
}

class EachResourceCard extends Component<Props> {
  handleClick = (): void => {
    const { onClickResourceCard, eachResource } = this.props;
    onClickResourceCard(eachResource);
  };

  render(): React.ReactNode {
    const { eachResource } = this.props;
    const { logoImageUrl, name, type, link, description } = eachResource;
    return (
      <CardContainer>
        <LogoTextContainer>
          <Logo
            data-testid='logoImage'
            src={logoImageUrl}
            alt='icon logo'
            onClick={this.handleClick}
          />
          <TextContainer>
            <ResourceName>{name}</ResourceName>
            <ResourceType>{type}</ResourceType>
          </TextContainer>
        </LogoTextContainer>
        <ResourceLink as='a' href={link} target='_blank'>
          {link}
        </ResourceLink>
        <ResourceDescription>{description}</ResourceDescription>
      </CardContainer>
    );
  }
}

export default EachResourceCard;
