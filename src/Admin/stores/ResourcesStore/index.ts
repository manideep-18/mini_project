import { APIStatus, API_INITIAL } from '@ib/api-constants';
import { action, observable, computed } from 'mobx';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

import { ResourceFetchService } from '../../services/ResourceFetchService';
import {
  ascendingOrderAlphabetical,
  descendingOrderAlphabetical,
} from '../../../Common/utils/SortingDataUtils';
import { camelCase } from '../../../Common/utils/StringConversionUtils';
import {
  ascendingSort,
  descendingSort,
  resourceInitialSortStatus,
} from '../../constants/SortFilterConstants';

import ResourceModal from '../Modals/ResourceModal';
import {
  EachResourceFetchType,
  ResourceDetailsRequestType,
  AddItemRequestType,
  resourceItemsDeleteRequestType,
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
  @observable getSearchResourceItemsDataAPIStatus!: APIStatus;
  @observable getSearchResourceItemsDataAPIError!: any;
  @observable resourceItemSortType!: string;
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
    this.getSearchResourceItemsDataAPIStatus = API_INITIAL;
    this.getSearchResourceItemsDataAPIError = '';
    this.resourceDetailsData = {
      logoImageUrl: '',
      name: '',
      type: '',
      link: '',
      description: '',
      itemsList: [],
    };
    this.resourceItemSortType = '';
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
    requestObject: resourceItemsDeleteRequestType[],
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
    requestObject: AddItemRequestType,
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

  @action.bound
  setGetSearchResourceItemsDataAPIStatus(status: APIStatus) {
    this.getSearchResourceItemsDataAPIStatus = status;
  }

  @action.bound
  setGetSearchResourceItemsDataAPIError(err: any) {
    this.getSearchResourceItemsDataAPIError = err;
  }

  getSearchResourceItemsDataAPI(
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getSearchResourceItemsDataPromise = this.resourceFetchService.getSearchResourceItemsData();

    return bindPromiseWithOnSuccess(getSearchResourceItemsDataPromise)
      .to(this.setGetSearchResourceItemsDataAPIStatus, (response) => {
        this.setResourceDetailsDataAPIResponse(
          response as EachResourceFetchType
        );
        onSuccess();
      })
      .catch((err) => {
        this.setGetSearchResourceItemsDataAPIError(err);
        onFailure();
      });
  }

  @action.bound
  setResourceItemSortType(value: string) {
    this.resourceItemSortType = value;
  }

  @computed get sortedResourceItemsData() {
    let resultSortedData = this.resourceDetailsData.itemsList;

    const camelCaseSortStatus: string = camelCase(resourceInitialSortStatus);
    if (
      this.resourceItemSortType !== '' &&
      this.resourceItemSortType === ascendingSort
    ) {
      return ascendingOrderAlphabetical(resultSortedData, camelCaseSortStatus);
    } else if (
      this.resourceItemSortType !== '' &&
      this.resourceItemSortType === descendingSort
    ) {
      return descendingOrderAlphabetical(resultSortedData, camelCaseSortStatus);
    }

    return resultSortedData;
  }
}

export default ResourcesStore;
