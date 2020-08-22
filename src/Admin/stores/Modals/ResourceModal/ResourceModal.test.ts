import { EachResourceFetchType } from '../../types';

import ResourceModal from '.';

describe('Resource Modal test cases', () => {
  it('should test all values are assigned properly', () => {
    const resourceData: EachResourceFetchType = {
      logo_image_url: 'https://image.png',
      name: 'bitbucket',
      type: 'cloud service',
      link: 'https://bitbucket.org',
      description: 'version control system',
      items_list: [],
    };

    const resourceModal = new ResourceModal(resourceData);

    expect(resourceModal.logoImageUrl).toBe('https://image.png');
    expect(resourceModal.name).toBe('bitbucket');
    expect(resourceModal.type).toBe('cloud service');
    expect(resourceModal.link).toBe('https://bitbucket.org');
    expect(resourceModal.description).toBe('version control system');
    expect(resourceModal.itemsList.length).toBe(0);
  });
});
