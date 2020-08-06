import { resolveWithTimeout } from '../../../Common/utils/TestUtils';

import { EachMyResourceFetchType } from '../../stores/types';
import myResourcesFetchedData from '../../fixtures/MyResources/myResourcesFetchData.json';
import searchMyResourcesData from '../../fixtures/MyResources/searchMyResourcesData.json';

import { MyResourceFetchService } from '.';

class MyResourcesFetchServiceFixture implements MyResourceFetchService {
  getMyResourcesData(): Promise<EachMyResourceFetchType[]> {
    return resolveWithTimeout(myResourcesFetchedData);
  }

  getSearchMyResourcesData(): Promise<EachMyResourceFetchType[]> {
    return resolveWithTimeout(searchMyResourcesData);
  }
}

export default MyResourcesFetchServiceFixture;
