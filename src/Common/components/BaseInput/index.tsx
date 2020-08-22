import React from 'react';

import { Input } from './styledComponents';

interface Props {
  id: string;
  type?: string;
  onChange: (value: string) => void;
  className?: any;
  value: any;
  placeholder?: string;
  disabled?: boolean;
}

class BaseInput extends React.Component<Props> {
  static defaultProps = {
    id: 'textInput',
    value: '',
    type: 'text',
  };

  handleChange = (event: any): void => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };

  render(): React.ReactNode {
    const {
      id,
      type,
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
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        className={className}
        onChange={this.handleChange}
        {...other}
      />
    );
  }
}

export default BaseInput;
