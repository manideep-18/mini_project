import { API_SUCCESS } from '@ib/api-constants';

import ResourceFetchServiceFixture from '../../services/ResourceFetchService/index.fixture';

import {
  EachResourceFetchType,
  resourceItemsDeleteRequestType,
} from '../types';

import ResourcesStore from '.';

const resourcesStore = new ResourcesStore(new ResourceFetchServiceFixture());

describe('resources store test cases', () => {
  it('should test resources data', async () => {
    await resourcesStore.getResourcesDataAPI({});
    expect(resourcesStore.resourcesFetchData).toHaveLength(3);
  });

  it('should test updating resources data', async () => {
    const cloudResource: EachResourceFetchType = {
      logo_image_url: '',
      name: '',
      type: '',
      link: '',
      description: '',
      items_list: [],
    };
    await resourcesStore.onAddResourceDataAPI(cloudResource);
    expect(resourcesStore.onAddResourceDataAPIStatus).toBe(API_SUCCESS);
  });

  it('should test resource items list when delete checked items api call called', async () => {
    const resourceItemsChecked: resourceItemsDeleteRequestType[] = [];
    await resourcesStore.getResourceItemsAfterDeleteAPI(resourceItemsChecked);
    expect(resourcesStore.resourceDetailsData.itemsList.length).toBe(4);
  });
});
