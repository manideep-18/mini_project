import React, { Component } from 'react';

import BaseInput from '../BaseInput';

import {
  TextInputContainer,
  LabelText,
  LabelInput,
  LabelTextArea,
} from './styledComponents';

interface Props {
  labelText: string;
  onChange: any;
  value: string;
  isTextArea?: boolean;
  disabled?: boolean;
}

class LabelWithInput extends Component<Props> {
  static defaultProps = {
    labelText: 'NAME',
    onChange: () => {},
    value: '',
  };

  render() {
    const { labelText, onChange, value, isTextArea, ...other } = this.props;
    return (
      <TextInputContainer>
        <LabelText>{labelText}</LabelText>
        {isTextArea ? (
          <LabelTextArea
            onChange={onChange}
            placeholder={labelText}
            value={value}
            {...other}
          />
        ) : (
          <LabelInput
            placeholder={labelText}
            onChange={onChange}
            value={value}
            {...other}
          />
        )}
      </TextInputContainer>
    );
  }
}

export default LabelWithInput;
