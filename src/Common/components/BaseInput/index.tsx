import React, { Component } from 'react';

import { Input } from './styledComponents';

interface Props {
  id: string;
  onChange: any;
  className?: any;
  value: any;
  placeholder?: string;
  disabled?: boolean;
}

class BaseInput extends React.Component<Props> {
  static defaultProps = {
    id: 'textInput',
    value: '',
  };

  render() {
    const {
      id,
      onChange,
      className,
      value,
      placeholder,
      disabled,
      ...other
    } = this.props;
    return (
      <Input
        data-testid={id}
        type='text'
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        className={className}
        onChange={onChange}
        {...other}
      />
    );
  }
}

export default BaseInput;
