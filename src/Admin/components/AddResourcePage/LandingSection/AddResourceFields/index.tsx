import React, { Component } from 'react';
import {
  FieldsContainer,
  AddResourceText,
  CreateButton,
} from './styledComponents';
import LabelWithInput from '../../../../../Common/components/LabelWithInput';
import { Link } from 'react-router-dom';

interface State {
  name: string;
  link: string;
  description: string;
}

interface Props {
  onFileUploadChange: any;
  onAddResource: (name: string, link: string, description: string) => void;
}

class AddResourceFields extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      link: '',
      description: '',
    };
  }

  handleClick = () => {
    const { onAddResource } = this.props;
    const { name, link, description } = this.state;
    if (name && link && description) onAddResource(name, link, description);
  };

  handleFileChange = (event: any) => {
    const { onFileUploadChange } = this.props;
    onFileUploadChange(URL.createObjectURL(event.target.files[0]));
  };

  handleNameInputChange = (value: string) => {
    this.setState({ name: value });
  };

  handleLinkInputChange = (value: string) => {
    this.setState({ link: value });
  };

  handleDescriptionInputChange = (value: string) => {
    this.setState({ description: value });
  };

  render() {
    const { name, link, description } = this.state;
    return (
      <FieldsContainer>
        <AddResourceText>Add a Resource</AddResourceText>
        <LabelWithInput
          labelText='Name'
          value={name}
          onChange={this.handleNameInputChange}
        />
        <LabelWithInput
          labelText='Link'
          value={link}
          onChange={this.handleLinkInputChange}
        />
        <LabelWithInput
          isTextArea={true}
          labelText='Description'
          value={description}
          onChange={this.handleDescriptionInputChange}
        />
        <input type='file' onChange={this.handleFileChange} />

        <CreateButton buttonText='create' onClick={this.handleClick} />
      </FieldsContainer>
    );
  }
}

export default AddResourceFields;
