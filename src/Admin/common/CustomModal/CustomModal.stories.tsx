import React from 'react';
import { storiesOf } from '@storybook/react';

import CustomModal from '.';

storiesOf('Admin Common Component Guide', module).add(
  'accept button modal',
  () => <CustomModal modalStatus={true} />
);
