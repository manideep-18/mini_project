import MyRequestsFetchServiceFixture from '../../services/MyRequestsFetchService/index.fixture';

import MyRequestsStore from '.';

const myRequestsStore = new MyRequestsStore(
  new MyRequestsFetchServiceFixture()
);

describe('MyRequestsStore test cases', () => {
  it('should test myResourcesDataFetched length after calling getMyResourcesData', async () => {
    await myRequestsStore.getMyResourcesDataAPI();
    expect(myRequestsStore.myResourcesDataFetched.length).toBe(6);
  });
});
