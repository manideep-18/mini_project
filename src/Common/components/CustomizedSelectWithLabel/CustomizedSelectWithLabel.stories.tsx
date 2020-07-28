import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CustomizedSelectWithLabel from '.';

storiesOf('Common Component Guide', module).add(
  'Customized select component',
  () => (
    <CustomizedSelectWithLabel
      onChange={action('change')}
      selectedOption={{ value: 'vanilla', label: 'Vanilla' }}
    />
  )
);
