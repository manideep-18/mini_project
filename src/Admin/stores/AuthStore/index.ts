import { observable, action } from 'mobx';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import { APIStatus, API_INITIAL } from '@ib/api-constants';

import AuthService from '../../services/AuthService';
import { LoginOrRegisterResponse, LoginOrRegisterRequest } from '../types';

class AuthStore {
  @observable loginOrRegisterAPIStatus!: APIStatus;
  @observable loginOrRegisterAPIError!: any;
  @observable isAdminLoggedIn!: boolean;
  authService: AuthService;
  constructor(authService: AuthService) {
    this.authService = authService;
    this.init();
  }

  @action.bound
  init() {
    this.loginOrRegisterAPIStatus = API_INITIAL;
    this.loginOrRegisterAPIError = '';
    this.isAdminLoggedIn = false;
  }

  @action.bound
  setIsAdminLoggedIn(response: LoginOrRegisterResponse) {
    this.isAdminLoggedIn = response.is_admin_logged_in;
  }

  @action.bound
  setLoginOrRegisterAPIStatus(status: APIStatus) {
    this.loginOrRegisterAPIStatus = status;
  }

  @action.bound
  setLoginOrRegisterAPIError(error: any) {
    this.loginOrRegisterAPIError = error;
  }

  loginOrRegisterAPI(
    request: LoginOrRegisterRequest,
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const loginOrRegisterPromise = this.authService.loginOrRegister(request);

    return bindPromiseWithOnSuccess(loginOrRegisterPromise)
      .to(this.setLoginOrRegisterAPIStatus, (response) => {
        this.setIsAdminLoggedIn(response as LoginOrRegisterResponse);
        onSuccess();
      })
      .catch((err) => {
        this.setLoginOrRegisterAPIError(err);
        onFailure();
      });
  }
}

export default AuthStore;
