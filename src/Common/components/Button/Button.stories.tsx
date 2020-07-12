import React from 'react';
import { storiesOf } from '@storybook/react';
import { API_SUCCESS, API_FETCHING } from '@ib/api-constants';
import { action } from '@storybook/addon-actions';

import Button from '.';
import Loader from '../Loader';

storiesOf('Common component Guide', module).add('Button component', () => (
  <Button
    buttonText='mani'
    onClick={action('clicked')}
    apiStatus={API_FETCHING}
    renderLoader={() => <Loader width={25} height={25} />}
  />
));
