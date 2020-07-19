import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

import ResourceModal from '../../../../../stores/Modals/ResourceModal';
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
  eachResource: ResourceModal;
  onClickResourceCard: (resource: ResourceModal) => void;
}

class EachResourceCard extends Component<Props> {
  handleClick = () => {
    const { onClickResourceCard, eachResource, history } = this.props;
    onClickResourceCard(eachResource);
    goToAdminResourcePage(history, eachResource.name);
  };

  render() {
    const { eachResource } = this.props;
    const { logoImageUrl, name, type, link, description } = eachResource;
    return (
      <CardContainer>
        <LogoTextContainer>
          <Logo src={logoImageUrl} alt='icon logo' onClick={this.handleClick} />
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

export default withRouter(EachResourceCard);
