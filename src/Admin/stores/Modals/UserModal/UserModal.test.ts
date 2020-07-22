import { EachUserDataFetchType } from '../../types';

import UserModal from '.';

describe('User Modal Test Cases', () => {
  it('should test all values are assigned properly', () => {
    const userData: EachUserDataFetchType = {
      person_name: 'John',
      department: 'Tech Department',
      job_role: 'Software Developer',
      items: [],
    };

    const userModal = new UserModal(userData);

    expect(userModal.personName).toBe('John');
    expect(userModal.department).toBe('Tech Department');
    expect(userModal.jobRole).toBe('Software Developer');
    expect(userModal.itemsList.length).toBe(0);
  });
});
