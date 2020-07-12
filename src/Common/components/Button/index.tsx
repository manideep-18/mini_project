import React, { Component } from 'react';
import 'styled-components/macro';
import { APIStatus, API_FETCHING } from '@ib/api-constants';

import { CustomButton, ButtonText } from './styledComponents';
import Loader from '../Loader';

interface Props {
  id?: string;
  buttonText: string;
  className?: string;
  buttonTextCss?: any;
  onClick: any;
  apiStatus: APIStatus;
  renderLoader: Function;
}

class Button extends React.Component<Props> {
  static defaultProps = {
    id: 'customButton',
    buttonText: 'button',
    renderLoader: () => <Loader width={25} height={25} />,
  };

  isFetching = (): boolean => {
    const { apiStatus } = this.props;
    return apiStatus === API_FETCHING;
  };

  renderContent = (): React.ReactNode => {
    const { buttonText, buttonTextCss, renderLoader } = this.props;
    if (this.isFetching()) {
      return renderLoader();
    }
    return <ButtonText css={buttonTextCss}>{buttonText}</ButtonText>;
  };
  render() {
    const { id, className, onClick } = this.props;
    return (
      <CustomButton onClick={onClick} data-testid={id} className={className}>
        {this.renderContent()}
      </CustomButton>
    );
  }
}

export default Button;
