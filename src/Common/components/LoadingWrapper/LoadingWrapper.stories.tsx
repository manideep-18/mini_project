import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LoadingWrapper from '.';

storiesOf('Common Component Guide', module).add('Loading Wrapper', () => (
  <LoadingWrapper
    failureText='page not found'
    onRetry={() => action('click')}
    retryText='retry'
  >
    <span>mani</span>
  </LoadingWrapper>
));
