import React from 'react';

import { CustomTextArea } from './styledComponents';

interface Props {
  id?: string;
  className?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  value: string;
}

class BaseTextArea extends React.Component<Props> {
  static defaultProps = {
    value: '',
  };
  handleChange = (event: any): void => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };

  render(): React.ReactNode {
    const {
      onChange,
      id,
      className,
      disabled,
      placeholder,
      value,
      ...other
    } = this.props;
    return (
      <CustomTextArea
        data-testid={id}
        className={className}
        value={value}
        onChange={this.handleChange}
        disabled={disabled}
        placeholder={placeholder}
        rows={3}
        {...other}
      />
    );
  }
}

export default BaseTextArea;
