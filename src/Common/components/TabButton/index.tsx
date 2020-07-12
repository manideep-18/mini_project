import React, { Component } from 'react';
import { CustomTabButton, TextCss } from './styledComponents';

interface Props {
  isActive: boolean;
  onClick: any;
  text: string;
}

class TabButton extends React.Component<Props> {
  render() {
    const { isActive, onClick, text } = this.props;
    return (
      <CustomTabButton
        onClick={onClick}
        isActive={isActive}
        buttonText={text}
        buttonTextCss={TextCss}
      />
    );
  }
}

export default TabButton;
