import RequestsFetchServiceFixture from '../../services/RequestsFetchService/index.fixture';

import { onAcceptRequestsDataRequestType } from '../types';

import RequestsStore from '.';

const requestsStore = new RequestsStore(new RequestsFetchServiceFixture());

describe('RequestsStore test cases', () => {
  it('should test requests data getting when getRequestsDataAPI called', async () => {
    await requestsStore.getRequestsDataAPI();
    expect(requestsStore.requestsDataFetched.length).toBe(7);
  });

  it('should test requests data when bitbucket filter is applied', async () => {
    await requestsStore.getRequestsDataAPI();
    requestsStore.setFilterStatus('bitbucket');
    expect(requestsStore.sortedDataWithFiltering.length).toBe(3);
  });

  it('should test requests data when accepting requests', async () => {
    const request: onAcceptRequestsDataRequestType[] = [];
    await requestsStore.getOnAcceptRequestsDataAPI(request);
    expect(requestsStore.requestsDataFetched.length).toBe(4);
  });

  it('should test requests data when search api call called', async () => {
    await requestsStore.getSearchRequestsDataAPI();
    expect(requestsStore.requestsDataFetched.length).toBe(5);
  });
});
