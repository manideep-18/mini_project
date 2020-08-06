import { resolveWithTimeout } from '../../../Common/utils/TestUtils';

import { EachMyRequestFetchType } from '../../stores/types';
import myRequestsFetchedData from '../../fixtures/MyRequests/myRequestsFetchedData.json';
import requestRejectedData from '../../fixtures/MyRequests/requestRejectedData.json';
import requestPendingData from '../../fixtures/MyRequests/requestPendingData.json';
import requestAcceptData from '../../fixtures/MyRequests/requestAcceptData.json';

import { MyRequestsFetchService } from '.';

class MyRequestsFetchServiceFixture implements MyRequestsFetchService {
  getMyRequestsData(): Promise<EachMyRequestFetchType[]> {
    return resolveWithTimeout(myRequestsFetchedData);
  }

  getMyRequestRejectedData(): Promise<EachMyRequestFetchType> {
    return resolveWithTimeout(requestRejectedData);
  }

  getMyRequestPendingData(): Promise<EachMyRequestFetchType> {
    return resolveWithTimeout(requestPendingData);
  }

  getMyRequestAcceptData(): Promise<EachMyRequestFetchType> {
    return resolveWithTimeout(requestAcceptData);
  }
}

export default MyRequestsFetchServiceFixture;
