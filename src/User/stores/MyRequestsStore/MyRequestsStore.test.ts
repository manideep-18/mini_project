import MyRequestsFetchServiceFixture from '../../services/MyRequestsFetchService/index.fixture';
import { ascendingSort } from '../../constants/SortFilterConstants';

import MyRequestModal from '../Modals/MyRequestModal';

import MyRequestsStore from '.';

const myRequestsStore = new MyRequestsStore(
  new MyRequestsFetchServiceFixture()
);

describe('MyRequestsStore test cases', () => {
  it('should test myRequestsDataFetched length after calling getMyRequestsDataAPI', async () => {
    await myRequestsStore.getMyRequestsDataAPI();
    expect(myRequestsStore.myRequestsDataFetched.length).toBe(6);
  });

  it('should test requestDataFetched when getMyRequestRejectedDataAPI called', async () => {
    const request = { request_id: '5' };
    const dataFetched: MyRequestModal = {
      id: 67,
      resource: 'Bit Bucket',
      item: 'Covid Dashboard',
      access: 'Read',
      status: 'Rejected',
      remarks:
        'This channel is for only iB Studio traniee So I am sorry for that ',
      reasonForAccess:
        'Maecenas sed diam eget risus varius blandit sit amet non magna',
    };

    await myRequestsStore.getMyRequestRejectedDataAPI(request);
    expect(myRequestsStore.requestDataFetched).toEqual(dataFetched);
  });

  it('should test requestDataFetched when getMyRequestPendingDataAPI called', async () => {
    const request = { request_id: '5' };
    const dataFetched: MyRequestModal = {
      id: 67,
      resource: 'Bit Bucket',
      item: 'Covid Dashboard',
      access: '',
      status: 'Pending',
      remarks: '',
      reasonForAccess:
        'Need to see the post that are in iB studio traniees channel to explore and learn',
    };

    await myRequestsStore.getMyRequestPendingDataAPI(request);
    expect(myRequestsStore.requestDataFetched).toEqual(dataFetched);
  });

  it('should test sortType when it is updated with ascending order', () => {
    myRequestsStore.setSortType(ascendingSort);
    expect(myRequestsStore.sortType).toBe(ascendingSort);
  });

  it('should test myResourcesData length when filter updating with Zeplin', async () => {
    const zeplinText = 'Zeplin';

    await myRequestsStore.getMyRequestsDataAPI();
    myRequestsStore.setFilterType(zeplinText);
    expect(myRequestsStore.sortedDataWithFiltered.length).toBe(2);
  });
});
