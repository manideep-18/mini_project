import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TabButton from '.';

storiesOf('Common Component Guide', module).add('Tab Button Component', () => (
  <TabButton text='Requests' onClick={action('click')} />
));
