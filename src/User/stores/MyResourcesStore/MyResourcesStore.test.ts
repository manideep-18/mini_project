import MyResourcesFetchServiceFixture from '../../services/MyResourcesFetchService/index.fixture';

import MyResourcesStore from '.';

const myResourcesStore = new MyResourcesStore(
  new MyResourcesFetchServiceFixture()
);

describe('MyResourcesStore test cases', () => {
  it('should test myResourcesDataFetched length after calling getMyResourcesData', async () => {
    await myResourcesStore.getMyResourcesDataAPI();
    expect(myResourcesStore.myResourcesDataFetched.length).toBe(6);
  });
});
