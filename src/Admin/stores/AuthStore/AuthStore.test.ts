import AuthServiceFixture from '../../services/AuthService/index.fixture';

import AuthStore from '.';

const authStore = new AuthStore(new AuthServiceFixture());

describe('AuthStore test cases', () => {
  it('should test isAdminLoggedIn when loginOrRegisterAPI called', async () => {
    const request = { user_name: 'test', user_password: 'test' };

    await authStore.loginOrRegisterAPI(request);
    expect(authStore.isAdminLoggedIn).toEqual(true);
  });
});
