import { RequestsFetchService } from '.';

import { resolveWithTimeout } from '../../../Common/utils/TestUtils';

import { EachRequestFetchType } from '../../stores/types';
import requestsDataFetchResponse from '../../fixtures/Requests/requestsDataFetchResponse.json';
import sortedRequestsData from '../../fixtures/Requests/sortedRequestsData.json';

class RequestsFetchServiceFixture implements RequestsFetchService {
  getRequestsData(): Promise<EachRequestFetchType[]> {
    return resolveWithTimeout(requestsDataFetchResponse);
  }

  getSortedRequestsData(): Promise<EachRequestFetchType[]> {
    return resolveWithTimeout(sortedRequestsData);
  }
}

export default RequestsFetchServiceFixture;
