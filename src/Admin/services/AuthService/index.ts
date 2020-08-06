import {
  LoginOrRegisterResponse,
  LoginOrRegisterRequest,
} from '../../stores/types';

interface AuthService {
  loginOrRegister(
    request: LoginOrRegisterRequest
  ): Promise<LoginOrRegisterResponse>;
}

export default AuthService;
