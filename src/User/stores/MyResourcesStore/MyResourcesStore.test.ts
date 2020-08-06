import MyResourcesFetchServiceFixture from '../../services/MyResourcesFetchService/index.fixture';
import { ascendingSort } from '../../constants/SortFilterConstants';

import MyResourcesStore from '.';

const myResourcesStore = new MyResourcesStore(
  new MyResourcesFetchServiceFixture()
);

describe('MyResourcesStore test cases', () => {
  it('should test myResourcesData length after calling getMyResourcesData', async () => {
    await myResourcesStore.getMyResourcesDataAPI();
    expect(myResourcesStore.myResourcesData.length).toBe(6);
  });

  it('should test searchMyResourcesData length when calling getSearchMyResourcesDataAPI', async () => {
    await myResourcesStore.getSearchMyResourcesDataAPI();
    expect(myResourcesStore.myResourcesData.length).toBe(4);
  });

  it('should test sortType when it is updated with ascending order', () => {
    myResourcesStore.setSortType(ascendingSort);
    expect(myResourcesStore.sortType).toBe(ascendingSort);
  });

  it('should test myResourcesData length when filter updating with Zeplin', async () => {
    const zeplinText = 'Zeplin';

    await myResourcesStore.getMyResourcesDataAPI();
    myResourcesStore.setFilterType(zeplinText);
    expect(myResourcesStore.sortedDataWithFiltered.length).toBe(2);
  });
});
