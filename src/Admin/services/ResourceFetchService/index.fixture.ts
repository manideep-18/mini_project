import { resolveWithTimeout } from '../../../Common/utils/TestUtils';

import { EachResourceFetchType } from '../../stores/types';
import resourcesFetchResponseData from '../../fixtures/Resources/resourcesFetchResponseData.json';
import resourceItemsFetchResponseData from '../../fixtures/Resources/resourceItemsFetchResponse.json';
import resourceItemsAfterDeleteData from '../../fixtures/Resources/resourceItemsAfterDeleteData.json';
import resourceItemsOnSearch from '../../fixtures/Resources/resourceItemsOnSearch.json';

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

  getSearchResourceItemsData(): Promise<EachResourceFetchType> {
    return resolveWithTimeout(resourceItemsOnSearch);
  }
}

export default ResourceFetchServiceFixture;
