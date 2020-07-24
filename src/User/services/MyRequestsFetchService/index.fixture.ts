import { resolveWithTimeout } from '../../../Common/utils/TestUtils';

import { EachMyResourceFetchType } from '../../stores/types';
import myRequestsFetchedData from '../../fixtures/MyRequests/myRequestsFetchedData.json';

import { MyRequestsFetchService } from '.';

class MyRequestsFetchServiceFixture implements MyRequestsFetchService {
  getMyRequestsData(): Promise<EachMyResourceFetchType[]> {
    return resolveWithTimeout(myRequestsFetchedData);
  }
}

export default MyRequestsFetchServiceFixture;
