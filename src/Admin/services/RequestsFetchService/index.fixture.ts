import { RequestsFetchService } from '.';

import { resolveWithTimeout } from '../../../Common/utils/TestUtils';

import { EachRequestFetchType } from '../../stores/types';
import requestsDataFetchResponse from '../../fixtures/Requests/requestsDataFetchResponse.json';

class RequestsFetchServiceFixture implements RequestsFetchService {
  getRequestsData(): Promise<EachRequestFetchType[]> {
    return resolveWithTimeout(requestsDataFetchResponse);
  }
}

export default RequestsFetchServiceFixture;
