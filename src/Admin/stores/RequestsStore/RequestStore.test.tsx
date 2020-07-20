import React from 'react';

import RequestsFetchServiceFixture from '../../services/RequestsFetchService/index.fixture';

import RequestsStore from '.';

const requestsStore = new RequestsStore(new RequestsFetchServiceFixture());

describe('requests store test cases', () => {
  it('should test requests data getting when getRequestsDataAPI called', async () => {
    await requestsStore.getRequestsDataAPI();
    expect(requestsStore.requestsDataFetched.length).toBe(5);
  });
});
