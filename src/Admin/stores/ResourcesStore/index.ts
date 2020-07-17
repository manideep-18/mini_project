import { APIStatus, API_INITIAL } from '@ib/api-constants';
import { observable, action } from 'mobx';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

import { ResourceFetchService } from '../../services/ResourceFetchService';

import {
  ResourcesFetchResponse,
  EachResourceFetchType,
  ResourceDetailsFetchResponse,
} from '../types';

class ResourcesStore {
  @observable getResourcesDataAPIStatus!: APIStatus;
  @observable getResourcesDataAPIError!: any;
  @observable resourcesFetchData!: ResourcesFetchResponse;
  @observable updateResourcesDataAPIStatus!: APIStatus;
  @observable updateResourcesDataAPIError!: any;
  @observable getResourceDetailsDataAPIStatus!: APIStatus;
  @observable getResourceDetailsDataAPIError!: any;
  @observable resourceDetailsData!: ResourceDetailsFetchResponse;
  resourceFetchService: ResourceFetchService;

  constructor(resourceFetchService: ResourceFetchService) {
    this.resourceFetchService = resourceFetchService;
    this.initStore();
  }

  @action.bound
  initStore() {
    this.getResourcesDataAPIStatus = API_INITIAL;
    this.getResourcesDataAPIError = '';
    this.updateResourcesDataAPIStatus = API_INITIAL;
    this.resourcesFetchData = { resources_data: [] };
    this.updateResourcesDataAPIError = '';
    this.getResourceDetailsDataAPIStatus = API_INITIAL;
    this.getResourceDetailsDataAPIError = '';
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

  @action.bound
  setUpdateResourcesDataAPIStatus(status: APIStatus) {
    this.updateResourcesDataAPIStatus = status;
  }

  @action.bound
  setUpdateResourcesDataAPIError(err: any) {
    this.updateResourcesDataAPIError = err;
  }

  updateResourcesDataAPI(
    requestObject: EachResourceFetchType,
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const updateResourcesDataPromise = this.resourceFetchService.updateResourcesData(
      requestObject
    );

    return bindPromiseWithOnSuccess(updateResourcesDataPromise)
      .to(this.setUpdateResourcesDataAPIStatus, (response) => {
        onSuccess();
      })
      .catch((err) => {
        this.setUpdateResourcesDataAPIError(err);
        onFailure();
      });
  }

  @action.bound
  setResourceDetailsDataAPIResponse(response: ResourceDetailsFetchResponse) {
    this.resourceDetailsData = response;
  }

  @action.bound
  setGetResourceDetailsAPIStatus(status: APIStatus) {
    this.getResourceDetailsDataAPIStatus = status;
  }

  @action.bound
  setGetResourceDetailsAPIError(error: any) {
    this.getResourceDetailsDataAPIError = error;
  }

  getResourceDetailsAPI(
    requestObject: EachResourceFetchType,
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getResourceDetailsPromise = this.resourceFetchService.getResourceDetails(
      requestObject
    );

    return bindPromiseWithOnSuccess(getResourceDetailsPromise)
      .to(this.setGetResourceDetailsAPIStatus, (response) => {
        this.setResourceDetailsDataAPIResponse(
          response as ResourceDetailsFetchResponse
        );
        onSuccess();
      })
      .catch((err) => {
        this.setGetResourceDetailsAPIError(err);
        onFailure();
      });
  }
}

export default ResourcesStore;
