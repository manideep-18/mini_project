import AuthService from '.';
import { LoginOrRegisterResponse } from '../../stores/types';
import loginOrRegisterFetchData from '../../fixtures/Auth/loginOrRegisterFetchData.json';
import { resolveWithTimeout } from '../../../Common/utils/TestUtils';

class AuthServiceFixture implements AuthService {
  loginOrRegister(): Promise<LoginOrRegisterResponse> {
    return resolveWithTimeout(loginOrRegisterFetchData);
  }
}

export default AuthServiceFixture;
