import { resolveWithTimeout } from '../../../Common/utils/TestUtils';

import { EachUserDataFetchType } from '../../stores/types';
import userDataFetchResponse from '../../fixtures/Users/userDataFetchResponse.json';
import userItemDataFetchResponse from '../../fixtures/Users/userItemDataFetchResponse.json';

import { UsersFetchService } from '.';

class UsersFetchServiceFixture implements UsersFetchService {
  getUsersData(): Promise<EachUserDataFetchType[]> {
    return resolveWithTimeout(userDataFetchResponse);
  }

  getUserItemData(): Promise<EachUserDataFetchType> {
    return resolveWithTimeout(userItemDataFetchResponse);
  }
}

export default UsersFetchServiceFixture;
