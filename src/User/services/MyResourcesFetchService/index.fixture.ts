import { MyResourceFetchService } from '.';
import { EachMyResourceFetchType } from '../../stores/types';
import { resolveWithTimeout } from '../../../Common/utils/TestUtils';
import myResourcesFetchedData from '../../fixtures/MyResources/myResourcesFetchData.json';

class MyResourcesFetchServiceFixture implements MyResourceFetchService {
  getMyResourcesData(): Promise<EachMyResourceFetchType[]> {
    return resolveWithTimeout(myResourcesFetchedData);
  }
}

export default MyResourcesFetchServiceFixture;
