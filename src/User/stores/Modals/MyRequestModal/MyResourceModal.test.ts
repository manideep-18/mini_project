import { EachMyRequestFetchType } from '../../types';

import MyRequestModal from '.';

describe('MyRequestModal test cases', () => {
  it('should all values are assigned properly', () => {
    const eachMyRequestData: EachMyRequestFetchType = {
      id: 4,
      resource: 'Zeplin',
      item: 'Gyan',
      access: 'Read',
      status: 'Rejected',
      remarks: 'remarks',
      reason_for_access: 'Invalid',
    };

    const myRequestModal = new MyRequestModal(eachMyRequestData);

    expect(myRequestModal.id).toBe(4);
    expect(myRequestModal.resource).toBe('Zeplin');
    expect(myRequestModal.item).toBe('Gyan');
    expect(myRequestModal.access).toBe('Read');
    expect(myRequestModal.status).toBe('Rejected');
    expect(myRequestModal.remarks).toBe('remarks');
    expect(myRequestModal.reasonForAccess).toBe('Invalid');
  });
});
