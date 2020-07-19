import { APIStatus, API_INITIAL } from '@ib/api-constants';
import { action, observable } from 'mobx';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

import { ResourceFetchService } from '../../services/ResourceFetchService';

import ResourceModal from '../Modals/ResourceModal';
import {
  EachResourceFetchType,
  ResourceItemType,
  ResourceDetailsRequestType,
  AddItemToResourceRequestType,
} from '../types';

class ResourcesStore {
  @observable getResourcesDataAPIStatus!: APIStatus;
  @observable getResourcesDataAPIError!: any;
  @observable resourcesFetchData!: ResourceModal[];
  @observable onAddResourceDataAPIStatus!: APIStatus;
  @observable onAddResourceDataAPIError!: any;
  @observable getResourceDetailsDataAPIStatus!: APIStatus;
  @observable getResourceDetailsDataAPIError!: any;
  @observable resourceDetailsData!: ResourceModal;
  @observable getResourcesAfterDeleteAPIStatus!: APIStatus;
  @observable getResourcesAfterDeleteAPIError!: any;
  @observable onAddItemToResourceAPIStatus!: APIStatus;
  @observable onAddItemToResourceAPIError!: any;
  resourceFetchService: ResourceFetchService;

  constructor(resourceFetchService: ResourceFetchService) {
    this.resourceFetchService = resourceFetchService;
    this.initStore();
  }

  @action.bound
  initStore() {
    this.getResourcesDataAPIStatus = API_INITIAL;
    this.getResourcesDataAPIError = '';
    this.onAddResourceDataAPIStatus = API_INITIAL;
    this.resourcesFetchData = [];
    this.onAddResourceDataAPIError = '';
    this.getResourceDetailsDataAPIStatus = API_INITIAL;
    this.getResourceDetailsDataAPIError = '';
    this.getResourcesAfterDeleteAPIStatus = API_INITIAL;
    this.getResourcesAfterDeleteAPIError = '';
    this.onAddItemToResourceAPIStatus = API_INITIAL;
    this.onAddItemToResourceAPIError = '';
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
  setResourcesDataAPIResponse(response: EachResourceFetchType[]) {
    this.resourcesFetchData = response.map(
      (eachResource: EachResourceFetchType) =>
        (this.resourceDetailsData = new ResourceModal(eachResource))
    );
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
        this.setResourcesDataAPIResponse(response as EachResourceFetchType[]);
        onSuccess();
      })
      .catch((err) => {
        this.setGetResourcesDataAPIError(err);
        onFailure();
      });
  }

  @action.bound
  setonAddResourceDataAPIStatus(status: APIStatus) {
    this.onAddResourceDataAPIStatus = status;
  }

  @action.bound
  setonAddResourceDataAPIError(err: any) {
    this.onAddResourceDataAPIError = err;
  }

  onAddResourceDataAPI(
    requestObject: EachResourceFetchType,
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const onAddResourceDataPromise = this.resourceFetchService.onAddResourceData(
      requestObject
    );

    return bindPromiseWithOnSuccess(onAddResourceDataPromise)
      .to(this.setonAddResourceDataAPIStatus, (response) => {
        onSuccess();
      })
      .catch((err) => {
        this.setonAddResourceDataAPIError(err);
        onFailure();
      });
  }

  @action.bound
  setResourceDetailsDataAPIResponse(response: EachResourceFetchType) {
    this.resourceDetailsData = new ResourceModal(response);
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
    requestObject: ResourceDetailsRequestType,
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getResourceDetailsPromise = this.resourceFetchService.getResourceDetails(
      requestObject
    );

    return bindPromiseWithOnSuccess(getResourceDetailsPromise)
      .to(this.setGetResourceDetailsAPIStatus, (response) => {
        this.setResourceDetailsDataAPIResponse(
          response as EachResourceFetchType
        );
        onSuccess();
      })
      .catch((err) => {
        this.setGetResourceDetailsAPIError(err);
        onFailure();
      });
  }

  @action.bound
  setGetResourcesAfterDeleteAPIStatus(status: APIStatus) {
    this.getResourcesAfterDeleteAPIStatus = status;
  }

  @action.bound
  setGetResourcesAfterDeleteAPIError(err: any) {
    this.getResourcesAfterDeleteAPIError = err;
  }

  getResourceItemsAfterDeleteAPI(
    requestObject: ResourceItemType[],
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getResourceItemsAfterDeletePromise = this.resourceFetchService.getResourceItemsAfterDelete(
      requestObject
    );

    return bindPromiseWithOnSuccess(getResourceItemsAfterDeletePromise)
      .to(this.setGetResourcesAfterDeleteAPIStatus, (response) => {
        this.setResourceDetailsDataAPIResponse(
          response as EachResourceFetchType
        );
        onSuccess();
      })
      .catch((err) => {
        this.setGetResourcesAfterDeleteAPIError(err);
        onFailure();
      });
  }

  @action.bound
  setOnAddItemToResourceAPIStatus(status: any) {
    this.onAddItemToResourceAPIStatus = status;
  }

  @action.bound
  setOnAddItemToResourceAPIError(err: any) {
    this.onAddItemToResourceAPIError = err;
  }

  onAddItemToResourceAPI(
    requestObject: AddItemToResourceRequestType,
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const onAddItemToResourcePromise = this.resourceFetchService.onAddItemToResource(
      requestObject
    );

    return bindPromiseWithOnSuccess(onAddItemToResourcePromise)
      .to(this.setOnAddItemToResourceAPIStatus, (response) => {
        onSuccess();
      })
      .catch((err) => {
        this.setOnAddItemToResourceAPIError(err);
        onFailure();
      });
  }
}

export default ResourcesStore;
