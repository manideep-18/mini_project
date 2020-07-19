import { resolveWithTimeout } from '../../../Common/utils/TestUtils';

import {
  EachResourceFetchType,
  ResourceDetailsFetchResponse,
} from '../../stores/types';
import resourcesFetchResponseData from '../../fixtures/resourcesFetchResponseData.json';
import resourceAfterResourceAddData from '../../fixtures/resourceAfterResourceAddData.json';
import resourceItemsFetchResponseData from '../../fixtures/resourceItemsFetchResponse.json';
import resourceItemsAfterDeleteData from '../../fixtures/resourceItemsAfterDeleteData.json';

import { ResourceFetchService } from '.';

class ResourceFetchServiceFixture implements ResourceFetchService {
  getResourcesData(): Promise<EachResourceFetchType[]> {
    return resolveWithTimeout(resourcesFetchResponseData);
  }

  onAddResourceData(): Promise<EachResourceFetchType[]> {
    return resolveWithTimeout(resourceAfterResourceAddData);
  }

  getResourceDetails(): Promise<EachResourceFetchType> {
    return resolveWithTimeout(resourceItemsFetchResponseData);
  }

  getResourceItemsAfterDelete(): Promise<EachResourceFetchType> {
    return resolveWithTimeout(resourceItemsAfterDeleteData);
  }
}

export default ResourceFetchServiceFixture;
