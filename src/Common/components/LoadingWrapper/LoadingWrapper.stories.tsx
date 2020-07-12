import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadingWrapper from '.';
import { API_FETCHING } from '@ib/api-constants';
import { action } from '@storybook/addon-actions';

storiesOf('Common Component Guide', module).add('Loading Wrapper', () => (
  <LoadingWrapper
    failureText='page not found'
    onRetry={() => action('click')}
    retryText='retry'
  >
    <span>mani</span>
  </LoadingWrapper>
));
