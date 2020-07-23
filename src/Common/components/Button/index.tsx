import React, { Component } from 'react';
import 'styled-components/macro';
import { APIStatus, API_FETCHING, API_SUCCESS } from '@ib/api-constants';

import { CustomButton, ButtonText } from './styledComponents';
import Loader from '../Loader';
import LoadingWrapper from '../LoadingWrapper';

interface Props {
  id?: string;
  buttonText: string;
  className?: string;
  buttonTextCss?: any;
  onClick: any;
  apiStatus: APIStatus;
  renderLoader: Function;
  disabled: boolean;
}

class Button extends React.Component<Props> {
  static defaultProps = {
    id: 'customButton',
    buttonText: '',
    onClick: () => {},
    apiStatus: API_SUCCESS,
    disabled: false,
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
    const {
      id,
      className,
      onClick,
      disabled,
      apiStatus,
      ...other
    } = this.props;
    return (
      <CustomButton
        data-testid={id}
        onClick={onClick}
        className={className}
        disabled={disabled || this.isFetching()}
        {...other}
      >
        {this.renderContent()}
      </CustomButton>
    );
  }
}

export default Button;
