import { resolveWithTimeout } from '../../../Common/utils/TestUtils';

import { EachMyResourceFetchType } from '../../stores/types';
import myRequestsFetchedData from '../../fixtures/MyRequests/myRequestsFetchedData.json';

import { MyResourcesFetchService } from '.';

class MyResourcesFetchServiceFixture implements MyResourcesFetchService {
  getMyResourcesData(): Promise<EachMyResourceFetchType[]> {
    return resolveWithTimeout(myRequestsFetchedData);
  }
}

export default MyResourcesFetchServiceFixture;
