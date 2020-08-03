import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import LabelWithInput from '../LabelWithInput';

import {
  FieldsContainer,
  AddResourceText,
  CreateButton,
} from './styledComponents';

interface Props {
  onAddItemToResource: (
    name: string,
    resourceName: string,
    link: string,
    description: string
  ) => void;

  resourceName?: string;
}

@observer
class ResourceItemsFields extends Component<Props> {
  @observable name!: string;
  @observable resourceName!: string;
  @observable link!: string;
  @observable description!: string;

  constructor(props: Props) {
    super(props);
    this.init();
  }

  init = () => {
    this.name = '';
    this.resourceName = '';
    this.link = '';
    this.description = '';
  };

  handleClick = () => {
    const { onAddItemToResource, resourceName } = this.props;

    if (this.name && this.link && this.description && resourceName)
      onAddItemToResource(this.name, resourceName, this.link, this.description);
  };

  handleNameInputChange = (value: string) => {
    this.name = value;
  };

  handleResourceNameInputChange = (value: string) => {
    this.resourceName = value;
  };

  handleLinkInputChange = (value: string) => {
    this.link = value;
  };

  handleDescriptionInputChange = (value: string) => {
    this.description = value;
  };

  render(): React.ReactNode {
    const { resourceName } = this.props;
    return (
      <FieldsContainer>
        <AddResourceText>Item Details</AddResourceText>
        <LabelWithInput
          data-testid='itemName'
          labelText='Item Name'
          value={this.name}
          onChange={this.handleNameInputChange}
        />
        <LabelWithInput
          labelText='Resource Name'
          value={resourceName ? resourceName : this.resourceName}
          onChange={this.handleResourceNameInputChange}
          disabled={resourceName ? true : false}
        />
        <LabelWithInput
          data-testid='itemLink'
          labelText='Link'
          value={this.link}
          onChange={this.handleLinkInputChange}
        />
        <LabelWithInput
          data-testid='itemDescription'
          isTextArea={true}
          labelText='Description'
          value={this.description}
          onChange={this.handleDescriptionInputChange}
        />

        <CreateButton
          data-testid='createButton'
          buttonText='create'
          onClick={this.handleClick}
        />
      </FieldsContainer>
    );
  }
}

export default ResourceItemsFields;
