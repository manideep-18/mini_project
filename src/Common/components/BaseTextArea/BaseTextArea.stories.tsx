import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BaseTextArea from '.';

storiesOf('Common Component Guide', module).add(
  'Base TextArea Component',
  () => <BaseTextArea onChange={action('clicked')} />
);
