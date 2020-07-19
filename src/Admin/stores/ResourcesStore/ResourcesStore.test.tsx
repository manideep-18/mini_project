import React from 'react';
import { API_SUCCESS } from '@ib/api-constants';

import ResourcesStore from '.';
import ResourceFetchServiceFixture from '../../services/ResourceFetchService/index.fixture';

import { EachResourceFetchType } from '../types';

const resourcesStore = new ResourcesStore(new ResourceFetchServiceFixture());

describe('resources store test cases', () => {
  it('should test resources data', async () => {
    await resourcesStore.getResourcesDataAPI({});
    expect(resourcesStore.resourcesFetchData).toHaveLength(3);
  });

  it('should test on resource adding', async () => {
    const cloudResource: EachResourceFetchType = {};
    await resourcesStore.onAddResourceDataAPI(cloudResource);
    expect(resourcesStore.resourcesFetchData).toHaveLength(4);
  });
});
