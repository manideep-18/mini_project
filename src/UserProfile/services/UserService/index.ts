import {
  GetUserProfileResponse,
  GetUserProfileRequestType,
} from '../../stores/types';

interface UserService {
  getUserProfile(
    request: GetUserProfileRequestType
  ): Promise<GetUserProfileResponse>;
}

export default UserService;
