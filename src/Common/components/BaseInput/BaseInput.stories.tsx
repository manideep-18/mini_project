import React from 'react';
import { storiesOf } from '@storybook/react';
import BaseInput from '.';
import { action } from '@storybook/addon-actions';

storiesOf('Common Component Guide', module).add('input Component', () => (
  <BaseInput
    value=''
    placeholder='Enter value'
    disabled={false}
    onChange={action('change')}
  />
));
