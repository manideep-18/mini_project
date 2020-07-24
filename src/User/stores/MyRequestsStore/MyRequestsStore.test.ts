import MyRequestsFetchServiceFixture from '../../services/MyRequestsFetchService/index.fixture';

import MyRequestsStore from '.';

const myRequestsStore = new MyRequestsStore(
  new MyRequestsFetchServiceFixture()
);

describe('MyRequestsStore test cases', () => {
  it('should test myRequestsDataFetched length after calling getMyRequestsData', async () => {
    await myRequestsStore.getMyRequestsDataAPI();
    expect(myRequestsStore.myRequestsDataFetched.length).toBe(6);
  });
});
