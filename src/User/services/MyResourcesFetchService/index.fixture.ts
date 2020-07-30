import { resolveWithTimeout } from '../../../Common/utils/TestUtils';

import { EachMyResourceFetchType } from '../../stores/types';
import myResourcesFetchedData from '../../fixtures/MyResources/myResourcesFetchData.json';

import { MyResourceFetchService } from '.';

class MyResourcesFetchServiceFixture implements MyResourceFetchService {
  getMyResourcesData(): Promise<EachMyResourceFetchType[]> {
    return resolveWithTimeout(myResourcesFetchedData);
  }
}

export default MyResourcesFetchServiceFixture;
