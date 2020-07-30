import { EachMyResourceFetchType } from '../../types';

import MyResourceModal from '.';

describe('MyResourceModal test cases', () => {
  it('should all values are assigned properly', () => {
    const eachMyResourceData: EachMyResourceFetchType = {
      resource: 'Zeplin',
      item: 'Gyan',
      access: 'Read',
      link: 'https://test.com',
    };

    const myResourceModal = new MyResourceModal(eachMyResourceData);

    expect(myResourceModal.resource).toBe('Zeplin');
    expect(myResourceModal.item).toBe('Gyan');
    expect(myResourceModal.access).toBe('Read');
    expect(myResourceModal.link).toBe('https://test.com');
  });
});
