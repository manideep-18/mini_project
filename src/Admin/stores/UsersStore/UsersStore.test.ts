import UsersFetchServiceFixture from '../../services/UsersFetchService/index.fixture';

import { userItemRequestType } from '../types';

import UsersStore from '.';

const usersStore = new UsersStore(new UsersFetchServiceFixture());

describe('users store test cases', () => {
  it('should test users data fetched when getUserDataApi called', async () => {
    await usersStore.getUsersDataAPI();
    expect(usersStore.usersDataFetched.length).toBe(6);
  });

  it('should test search users data fetched when getSearchUsersDataAPI called', async () => {
    const request = { search_request_text: 'test' };
    await usersStore.getSearchUsersDataAPI(request);
    expect(usersStore.usersDataFetched.length).toBe(4);
  });

  it('should test user data items list fetched when getUserItemData api called', async () => {
    const request: userItemRequestType = { person_name: 'Varun' };
    await usersStore.getUserItemDataAPI(request);
    expect(usersStore.userItemDataFetched.itemsList.length).toBe(5);
  });

  it('should test users data fetched when filter tech department applied', async () => {
    await usersStore.setFilterType('Tech Department');
    expect(usersStore.sortedDataWithFiltered.length).toBe(2);
  });
});
