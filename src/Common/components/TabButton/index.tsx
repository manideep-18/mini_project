import React, { Component } from 'react';

import { CustomTabButton, TextCss } from './styledComponents';

interface State {
  isActive: boolean;
}

interface Props {
  tabStatus?: string;
  onClick: any;
  text: string;
}

class TabButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  handleClick = () => {
    const { onClick, text } = this.props;
    this.setState({ isActive: true });
    onClick(text);
  };

  initIsActive = () => {
    const { isActive } = this.state;
    if (isActive) this.setState({ isActive: false });
  };

  componentDidUpdate(prevProps: any, prevState: any) {
    const { tabStatus } = this.props;
    if (prevProps.text !== tabStatus) this.initIsActive();
  }

  componentDidMount() {
    const { tabStatus, text } = this.props;
    if (tabStatus === text) this.setState({ isActive: true });
  }

  render() {
    const { text } = this.props;
    const { isActive } = this.state;
    return (
      <CustomTabButton
        onClick={this.handleClick}
        isActive={isActive}
        buttonText={text}
        buttonTextCss={TextCss}
      />
    );
  }
}

export default TabButton;
