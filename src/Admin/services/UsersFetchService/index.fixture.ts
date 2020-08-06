import { resolveWithTimeout } from '../../../Common/utils/TestUtils';

import { EachUserDataFetchType } from '../../stores/types';
import userDataFetchResponse from '../../fixtures/Users/userDataFetchResponse.json';
import userItemDataFetchResponse from '../../fixtures/Users/userItemDataFetchResponse.json';
import searchUsersDataFetchResponse from '../../fixtures/Users/searchUsersDataFetchResponse.json';
import searchUserItemsDataFetchResponse from '../../fixtures/Users/searchUserItemsDataFetchResponse.json';

import { UsersFetchService } from '.';

class UsersFetchServiceFixture implements UsersFetchService {
  getUsersData(): Promise<EachUserDataFetchType[]> {
    return resolveWithTimeout(userDataFetchResponse);
  }

  getSearchUsersData(): Promise<EachUserDataFetchType[]> {
    return resolveWithTimeout(searchUsersDataFetchResponse);
  }

  getUserItemData(): Promise<EachUserDataFetchType> {
    return resolveWithTimeout(userItemDataFetchResponse);
  }

  getSearchUserItemsData(): Promise<EachUserDataFetchType> {
    return resolveWithTimeout(searchUserItemsDataFetchResponse);
  }

  onAddItemToUserData(): Promise<{}> {
    return resolveWithTimeout({});
  }
}

export default UsersFetchServiceFixture;
