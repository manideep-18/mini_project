import React, { Component } from 'react';
import Select from 'react-select';

import {
  LabelSelectContainer,
  LabelText,
  SelectContainer,
} from './styledComponents';

interface Option {
  value: string;
  label: string;
}

interface Props {
  label: string;
  options: Option[];
  placeholder?: string;
  isDisabled?: boolean;
  onChange: (value: Option) => void;
  selectedOption: Option;
}

class CustomizedSelectWithLabel extends Component<Props> {
  static defaultProps = {
    label: 'label',
    options: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ],
  };

  handleChange = (status: any) => {
    const { onChange } = this.props;

    onChange(status);
  };

  render() {
    const { label, options, selectedOption, isDisabled } = this.props;
    return (
      <LabelSelectContainer>
        <LabelText>{label}</LabelText>
        <SelectContainer>
          <Select
            options={options}
            isDisabled={isDisabled}
            value={selectedOption}
            onChange={this.handleChange}
            placeholder='this'
          />
        </SelectContainer>
      </LabelSelectContainer>
    );
  }
}

export default CustomizedSelectWithLabel;
