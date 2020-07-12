import React, { Component } from 'react';

import { CustomTextArea } from './styledComponents';

interface Props {
  id?: string;
  className?: string;
  onChange: any;
  disabled?: boolean;
}

class BaseTextArea extends React.Component<Props> {
  render() {
    const { onChange, id, className, disabled } = this.props;
    return (
      <CustomTextArea
        data-testid={id}
        className={className}
        onChange={onChange}
        disabled={disabled}
        rows={3}
      />
    );
  }
}

export default BaseTextArea;
