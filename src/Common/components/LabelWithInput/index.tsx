import React, { Component } from 'react';

import {
  TextInputContainer,
  LabelText,
  LabelInput,
  LabelTextArea,
} from './styledComponents';

interface Props {
  id?: string;
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
    const { labelText, onChange, value, isTextArea, id, ...other } = this.props;
    return (
      <TextInputContainer>
        <LabelText>{labelText}</LabelText>
        {isTextArea ? (
          <LabelTextArea
            id={id}
            onChange={onChange}
            placeholder={labelText}
            value={value}
            {...other}
          />
        ) : (
          <LabelInput
            id={id}
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
