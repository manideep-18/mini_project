import React from 'react';
import { storiesOf } from '@storybook/react';
import { API_SUCCESS, API_FETCHING } from '@ib/api-constants';
import { action } from '@storybook/addon-actions';

import Loader from '../Loader';

import Button from '.';

storiesOf('Common component Guide', module).add('Button component', () => (
  <Button
    buttonText='UPDATE ITEM'
    onClick={action('clicked')}
    apiStatus={API_FETCHING}
    renderLoader={() => <Loader width={25} height={25} />}
  />
));
