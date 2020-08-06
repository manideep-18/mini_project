import { resolveWithTimeout } from '../../../Common/utils/TestUtils';

import { GetUserProfileResponse } from '../../stores/types';
import userProfileStatus from '../../fixtures/userProfileStatus.json';

import UserService from '.';

class UserServiceFixture implements UserService {
  getUserProfile(): Promise<GetUserProfileResponse> {
    return resolveWithTimeout(userProfileStatus);
  }
}

export default UserServiceFixture;
