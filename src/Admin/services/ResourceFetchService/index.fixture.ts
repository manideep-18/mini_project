import { ResourceFetchService } from '.';
import {
  ResourcesFetchResponse,
  EachResourceFetchType,
} from '../../stores/types';
import { resolveWithTimeout } from '../../../Common/utils/TestUtils';
import resourcesFetchResponseData from '../../fixtures/resourcesFetchResponseData.json';
class ResourceFetchServiceFixture implements ResourceFetchService {
  getResourcesData(): Promise<ResourcesFetchResponse> {
    return resolveWithTimeout(resourcesFetchResponseData);
  }

  updateResourcesData(): Promise<{}> {
    return resolveWithTimeout({});
  }
}

export default ResourceFetchServiceFixture;
