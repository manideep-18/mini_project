import React from 'react';
import {
  APIStatus,
  API_SUCCESS,
  API_FETCHING,
  API_FAILED,
} from '@ib/api-constants';

import Loader from '../Loader';

import FailureView from './FailureView';
import { LoaderContainer } from './styledComponents';

interface Props {
  apiStatus: APIStatus;
  renderLoadingView: Function;
  onRetry: Function;
  failureText: string;
  retryText: string;
}

class LoadingWrapper extends React.Component<Props> {
  static defaultProps = {
    apiStatus: API_FETCHING,
    renderLoadingView: () => <Loader />,
    retryText: 'retry',
    failureText: 'page not found',
  };

  renderData = (): React.ReactNode => {
    const {
      apiStatus,
      children,
      renderLoadingView,
      failureText,
      onRetry,
      retryText,
    } = this.props;
    switch (apiStatus) {
      case API_SUCCESS:
        return children;
      case API_FETCHING:
        return <LoaderContainer>{renderLoadingView()}</LoaderContainer>;
      case API_FAILED:
        return (
          <FailureView
            failureText={failureText}
            onRetry={onRetry}
            retryText={retryText}
          />
        );
      default:
        return children;
    }
  };

  render(): React.ReactNode {
    return <>{this.renderData()}</>;
  }
}

export default LoadingWrapper;
