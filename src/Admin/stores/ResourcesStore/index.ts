import { APIStatus } from '@ib/api-constants';
import { observable, action } from 'mobx';

import { ResourceFetchService } from '../../services/ResourceFetchService';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import { ResourcesFetchResponse } from '../types';

class ResourcesStore {
  @observable getResourcesDataAPIStatus!: APIStatus;
  @observable getResourcesDataAPIError!: any;
  @observable resourcesFetchData!: ResourcesFetchResponse;
  resourceFetchService: ResourceFetchService;

  constructor(resourceFetchService: ResourceFetchService) {
    this.resourceFetchService = resourceFetchService;
  }

  @action.bound
  setGetResourcesDataAPIStatus(status: APIStatus) {
    this.getResourcesDataAPIStatus = status;
  }

  @action.bound
  setGetResourcesDataAPIError(err: any) {
    this.getResourcesDataAPIError = err;
  }

  @action.bound
  setResourcesDataAPIResponse(response: ResourcesFetchResponse) {
    this.resourcesFetchData = response;
  }

  @action.bound
  getResourcesDataAPI(
    {},
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getResourcesDataPromise = this.resourceFetchService.getResourcesData();

    return bindPromiseWithOnSuccess(getResourcesDataPromise)
      .to(this.setGetResourcesDataAPIStatus, (response) => {
        this.setResourcesDataAPIResponse(response as ResourcesFetchResponse);
        onSuccess();
      })
      .catch((err) => {
        this.setGetResourcesDataAPIError(err);
        onFailure();
      });
  }
}

export default ResourcesStore;
