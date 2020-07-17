import { ResourceFetchService } from '.';
import {
  ResourcesFetchResponse,
  EachResourceFetchType,
  ResourceDetailsFetchResponse,
} from '../../stores/types';
import { resolveWithTimeout } from '../../../Common/utils/TestUtils';
import resourcesFetchResponseData from '../../fixtures/resourcesFetchResponseData.json';
import resourceItemsFetchResponseData from '../../fixtures/resourceItemsFetchResponse.json';

class ResourceFetchServiceFixture implements ResourceFetchService {
  getResourcesData(): Promise<ResourcesFetchResponse> {
    return resolveWithTimeout(resourcesFetchResponseData);
  }

  updateResourcesData(): Promise<{}> {
    return resolveWithTimeout({});
  }

  getResourceDetails(): Promise<ResourceDetailsFetchResponse> {
    return resolveWithTimeout(resourceItemsFetchResponseData);
  }
}

export default ResourceFetchServiceFixture;
