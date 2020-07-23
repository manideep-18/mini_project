import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { CustomTabButton, TextCss } from './styledComponents';

interface State {
  isActive: boolean;
}

interface Props {
  tabStatus?: string;
  onClick: any;
  text: string;
}

@observer
class TabButton extends React.Component<Props, State> {
  @observable isActive: boolean;
  constructor(props: Props) {
    super(props);
    this.isActive = false;
  }

  handleClick = () => {
    const { onClick, text } = this.props;
    this.isActive = true;
    onClick(text);
  };

  initIsActive = () => {
    if (this.isActive) this.isActive = false;
  };

  componentDidUpdate(prevProps: any, prevState: any) {
    const { tabStatus } = this.props;
    if (prevProps.text !== tabStatus) this.initIsActive();
  }

  componentDidMount() {
    const { tabStatus, text, onClick } = this.props;
    if (tabStatus === text) {
      this.isActive = true;
      onClick(text);
    }
  }

  render() {
    const { text } = this.props;
    return (
      <CustomTabButton
        data-testid='tab-button'
        onClick={this.handleClick}
        isActive={this.isActive}
        buttonText={text}
        buttonTextCss={TextCss}
      />
    );
  }
}

export default TabButton;
