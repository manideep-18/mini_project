import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import LabelWithInput from '../../../../../../Common/components/LabelWithInput';

import {
  FieldsContainer,
  AddResourceText,
  CreateButton,
} from './styledComponents';

interface Props {
  onFileUploadChange?: any;
  onAddResource: (name: string, link: string, description: string) => void;
}

@observer
class AddResourceFields extends Component<Props> {
  @observable name!: string;
  @observable link!: string;
  @observable description!: string;

  constructor(props: Props) {
    super(props);
    this.init();
  }

  init = () => {
    this.name = '';
    this.link = '';
    this.description = '';
  };

  handleClick = () => {
    const { onAddResource } = this.props;
    if (this.name && this.link && this.description)
      onAddResource(this.name, this.link, this.description);
  };

  handleFileChange = (event: any) => {
    const { onFileUploadChange } = this.props;
    onFileUploadChange(URL.createObjectURL(event.target.files[0]));
  };

  handleNameInputChange = (value: string) => {
    this.name = value;
  };

  handleLinkInputChange = (value: string) => {
    this.link = value;
  };

  handleDescriptionInputChange = (value: string) => {
    this.description = value;
  };

  render() {
    return (
      <FieldsContainer>
        <AddResourceText>Add a Resource</AddResourceText>
        <LabelWithInput
          data-testid='name'
          labelText='Name'
          value={this.name}
          onChange={this.handleNameInputChange}
        />
        <LabelWithInput
          data-testid='link'
          labelText='Link'
          value={this.link}
          onChange={this.handleLinkInputChange}
        />
        <LabelWithInput
          data-testid='description'
          isTextArea={true}
          labelText='Description'
          value={this.description}
          onChange={this.handleDescriptionInputChange}
        />
        <input type='file' onChange={this.handleFileChange} />

        <CreateButton
          data-testid='createButton'
          buttonText='create'
          onClick={this.handleClick}
        />
      </FieldsContainer>
    );
  }
}

export default AddResourceFields;
