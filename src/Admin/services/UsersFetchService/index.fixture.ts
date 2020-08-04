import { resolveWithTimeout } from '../../../Common/utils/TestUtils';

import { EachUserDataFetchType, SearchRequestType } from '../../stores/types';
import userDataFetchResponse from '../../fixtures/Users/userDataFetchResponse.json';
import userItemDataFetchResponse from '../../fixtures/Users/userItemDataFetchResponse.json';
import searchUsersDataFetchResponse from '../../fixtures/Users/searchUsersDataFetchResponse.json';

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

  onAddItemToUserData(): Promise<{}> {
    return resolveWithTimeout({});
  }
}

export default UsersFetchServiceFixture;
