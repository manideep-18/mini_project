import UserServiceFixture from '../../services/UserService/index.fixture';
import UserStore from '.';

const userStore = new UserStore(new UserServiceFixture());

describe('UserStore test cases', () => {
  it('should test profile status when getUserProfileAPI called', async () => {
    const request = { profile_request_type: 'admin' };
    await userStore.getUserProfileAPI(request);
    expect(userStore.profileStatus).toEqual('admin');
  });
});
