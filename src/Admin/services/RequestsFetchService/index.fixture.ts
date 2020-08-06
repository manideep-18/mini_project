import { RequestsFetchService } from '.';

import { resolveWithTimeout } from '../../../Common/utils/TestUtils';

import { EachRequestFetchType } from '../../stores/types';
import requestsDataFetchResponse from '../../fixtures/Requests/requestsDataFetchResponse.json';
import searchRequestsData from '../../fixtures/Requests/searchRequestsData.json';
import onAcceptRequestsData from '../../fixtures/Requests/onAcceptRequestsData.json';
import onRejectRequestsData from '../../fixtures/Requests/onRejectRequestsData.json';

class RequestsFetchServiceFixture implements RequestsFetchService {
  getRequestsData(): Promise<EachRequestFetchType[]> {
    return resolveWithTimeout(requestsDataFetchResponse);
  }

  getSearchRequestsData(): Promise<EachRequestFetchType[]> {
    return resolveWithTimeout(searchRequestsData);
  }

  getOnAcceptRequestsData(): Promise<EachRequestFetchType[]> {
    return resolveWithTimeout(onAcceptRequestsData);
  }

  getOnRejectRequestsData(): Promise<EachRequestFetchType[]> {
    return resolveWithTimeout(onRejectRequestsData);
  }
}

export default RequestsFetchServiceFixture;
