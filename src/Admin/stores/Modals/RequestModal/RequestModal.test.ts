import { EachRequestFetchType } from '../../types';

import RequestModal from '.';

describe('Request Modal tests', () => {
  it('should test all values are assigned properly', () => {
    const requestData: EachRequestFetchType = {
      id: 2,
      person_name: 'Venky',
      resource: 'slack',
      item: 'channel',
      access_level: 'Read',
      due_date_time: '24/12/2019 12:25 AM',
    };

    const requestModal = new RequestModal(requestData);

    expect(requestModal.id).toBe(2);
    expect(requestModal.personName).toBe('Venky');
    expect(requestModal.resource).toBe('slack');
    expect(requestModal.item).toBe('channel');
    expect(requestModal.accessLevel).toBe('Read');
    expect(requestModal.dueDateTime).toBe('24/12/2019 12:25 AM');
  });
});
