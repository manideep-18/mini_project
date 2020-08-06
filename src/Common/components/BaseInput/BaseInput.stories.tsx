import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BaseInput from '.';

storiesOf('Common Component Guide', module).add('input Component', () => (
  <BaseInput
    value=''
    placeholder='Enter value'
    disabled={false}
    onChange={action('change')}
  />
));
