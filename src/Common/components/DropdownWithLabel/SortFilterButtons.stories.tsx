import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DropdownWithLabel from '.';

storiesOf('Common Component Guide', module).add(
  'dropdown button component',
  () => <DropdownWithLabel onChange={action('change')} />
);
