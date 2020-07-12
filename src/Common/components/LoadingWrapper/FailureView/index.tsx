import React, { Component } from 'react';
import { API_FAILED } from '@ib/api-constants';

import { Container, FailureText, RetryButton } from './styledComponents';

interface Props {
  failureText: string;
  retryText: string;
  retryTextCss?: any;
  onRetry: Function;
}

class FailureView extends React.Component<Props> {
  static defaultProps = {
    failureText: 'page not found',
    retryText: 'retry',
    onRetry: () => {},
  };

  render() {
    const { failureText, retryText, onRetry, retryTextCss } = this.props;
    return (
      <Container>
        <FailureText>{failureText}</FailureText>
        <RetryButton
          id='retry'
          buttonText={retryText}
          onClick={onRetry}
          apiStatus={API_FAILED}
          buttonTextCss={retryTextCss}
        />
      </Container>
    );
  }
}

export default FailureView;
