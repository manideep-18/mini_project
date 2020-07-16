import { ResourceFetchService } from '.';
import { ResourcesFetchResponse } from '../../stores/types';
import { resolveWithTimeout } from '../../../Common/utils/TestUtils';
import resourcesFetchResponseData from '../../fixtures/resourcesFetchResponseData.json';
class ResourceFetchServiceFixture implements ResourceFetchService {
  getResourcesData(): Promise<ResourcesFetchResponse> {
    return resolveWithTimeout(resourcesFetchResponseData);
  }
}

export default ResourceFetchServiceFixture;
