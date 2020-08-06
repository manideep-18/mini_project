import React from 'react';
import { storiesOf } from '@storybook/react';

import ResourceModal from '../../../../../stores/Modals/ResourceModal';

import EachResourceCard from '.';

storiesOf('Admin Component', module).add('each resource card component', () => {
  const eachResource: ResourceModal = {
    logoImageUrl:
      'https: //cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/05f39af1-095d-41ff-b5bc-baac146f590d.svg',
    name: 'Dropbox, Inc.',
    type: 'Cloud Services',
    link: 'www.dropbox.com',
    description:
      'Slack brings the team together, wherever you are. With all of your communication and tools in one....',
    itemsList: [],
  };
  return (
    <EachResourceCard
      eachResource={eachResource}
      onClickResourceCard={() => {}}
    />
  );
});
