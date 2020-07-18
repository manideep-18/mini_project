import React, { Component } from 'react';

import { EachResourceFetchType } from '../../../../../stores/types';

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
  resourceDetails: EachResourceFetchType;
}

class ResourceDetailedView extends Component<Props> {
  render() {
    const { resourceDetails } = this.props;
    const {
      logoImageUrl,
      resourceName,
      resourceLink,
      resourceDescription,
    } = resourceDetails;
    return (
      <DetailedViewContainer>
        <ImageTextContainer>
          <ResourceIcon src={logoImageUrl} alt='resource-icon' />
          <TextsContainer>
            <ResourceName>{resourceName}</ResourceName>
            <ResourceLink as='a' href={resourceLink} target='_blank'>
              {resourceLink}
            </ResourceLink>
          </TextsContainer>
        </ImageTextContainer>
        <ResourceDescription as='p'>{resourceDescription}</ResourceDescription>
        <UpdateButton buttonText='Update' />
      </DetailedViewContainer>
    );
  }
}

export default ResourceDetailedView;
