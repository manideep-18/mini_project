import { resolveWithTimeout } from '../../../Common/utils/TestUtils';

import { EachResourceFetchType } from '../../stores/types';
import resourcesFetchResponseData from '../../fixtures/resourcesFetchResponseData.json';
import resourceItemsFetchResponseData from '../../fixtures/resourceItemsFetchResponse.json';
import resourceItemsAfterDeleteData from '../../fixtures/resourceItemsAfterDeleteData.json';

import { ResourceFetchService } from '.';

class ResourceFetchServiceFixture implements ResourceFetchService {
  getResourcesData(): Promise<EachResourceFetchType[]> {
    return resolveWithTimeout(resourcesFetchResponseData);
  }

  onAddResourceData(): Promise<{}> {
    return resolveWithTimeout({});
  }

  getResourceDetails(): Promise<EachResourceFetchType> {
    return resolveWithTimeout(resourceItemsFetchResponseData);
  }

  getResourceItemsAfterDelete(): Promise<EachResourceFetchType> {
    return resolveWithTimeout(resourceItemsAfterDeleteData);
  }

  onAddItemToResource(): Promise<{}> {
    return resolveWithTimeout({});
  }
}

export default ResourceFetchServiceFixture;
