import { resolveWithTimeout } from '../../../Common/utils/TestUtils';

import { EachUserDataFetchType } from '../../stores/types';
import userDataFetchResponse from '../../fixtures/Users/userDataFetchResponse.json';

import { UsersFetchService } from '.';

class UsersFetchServiceFixture implements UsersFetchService {
  getUsersData(): Promise<EachUserDataFetchType[]> {
    return resolveWithTimeout(userDataFetchResponse);
  }
}

export default UsersFetchServiceFixture;
