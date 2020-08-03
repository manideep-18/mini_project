import React, { Component } from 'react';

import ResourceModal from '../../../../../stores/Modals/ResourceModal';

import {
  DetailedViewContainer,
  ImageTextContainer,
  ResourceIcon,
  TextsContainer,
  ResourceName,
  ResourceLink,
  ResourceDescription,
  UpdateButton,
} from './styledComponents';

interface Props {
  resourceDetailsData: ResourceModal;
}

class ResourceDetailedView extends Component<Props> {
  render(): React.ReactNode {
    const { resourceDetailsData } = this.props;
    const { logoImageUrl, name, description, link } = resourceDetailsData;
    return (
      <DetailedViewContainer>
        <ImageTextContainer>
          <ResourceIcon src={logoImageUrl} alt='resource-icon' />
          <TextsContainer>
            <ResourceName>{name}</ResourceName>
            <ResourceLink as='a' href={link} target='_blank'>
              {link}
            </ResourceLink>
          </TextsContainer>
        </ImageTextContainer>
        <ResourceDescription as='p'>{description}</ResourceDescription>
        <UpdateButton buttonText='Update' />
      </DetailedViewContainer>
    );
  }
}

export default ResourceDetailedView;
