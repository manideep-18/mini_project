import { EachMyResourceFetchType } from '../../types';
import MyResourceModal from '.';

describe('MyResourceModal test cases', () => {
  it('should all values are assigned properly', () => {
    const eachMyResouceData: EachMyResourceFetchType = {
      id: 4,
      resource: 'Zeplin',
      item: 'Gyan',
      access: 'Read',
      status: 'Rejected',
    };

    const myResourceModal = new MyResourceModal(eachMyResouceData);

    expect(myResourceModal.id).toBe(4);
    expect(myResourceModal.resource).toBe('Zeplin');
    expect(myResourceModal.item).toBe('Gyan');
    expect(myResourceModal.access).toBe('Read');
    expect(myResourceModal.status).toBe('Rejected');
  });
});
