import { observable, action } from 'mobx';
import { APIStatus, API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

import UserService from '../../services/UserService';

import { GetUserProfileResponse, GetUserProfileRequestType } from '../types';

class UserStore {
  @observable profileStatus!: string;
  @observable getUserProfileAPIStatus!: APIStatus;
  @observable getUserProfileAPIError!: any;
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
    this.init();
  }

  @action.bound
  init() {
    this.profileStatus = '';
    this.getUserProfileAPIStatus = API_INITIAL;
    this.getUserProfileAPIError = '';
  }

  @action.bound
  setProfileStatus(status: GetUserProfileResponse) {
    this.profileStatus = status.profile_type;
  }

  @action.bound
  setGetUserProfileAPIStatus(status: APIStatus) {
    this.getUserProfileAPIStatus = status;
  }

  @action.bound
  setGetUserProfileAPIError(error: any) {
    this.getUserProfileAPIError = error;
  }

  getUserProfileAPI(
    request: GetUserProfileRequestType,
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getUserProfilePromise = this.userService.getUserProfile(request);

    return bindPromiseWithOnSuccess(getUserProfilePromise)
      .to(this.setGetUserProfileAPIStatus, (response) => {
        this.setProfileStatus(response as GetUserProfileResponse);
        onSuccess();
      })
      .catch((err) => {
        this.setGetUserProfileAPIError(err);
        onFailure();
      });
  }
}

export default UserStore;
