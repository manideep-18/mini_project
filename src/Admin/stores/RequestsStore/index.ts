import { observable, action, computed } from 'mobx';
import { APIStatus, API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

import { RequestsFetchService } from '../../services/RequestsFetchService';

import { EachRequestFetchType } from '../types';
import RequestModal from '../Modals/RequestModal';
import { camelCase } from '../../utils/stringConversionUtils';

class RequestsStore {
  @observable getRequestsDataAPIStatus!: APIStatus;
  @observable getRequestsDataAPIError: any;
  @observable requestsDataFetched!: RequestModal[];
  @observable getSearchRequestsDataAPIStatus!: APIStatus;
  @observable getSearchRequestsDataAPIError!: any;
  @observable filterStatus!: string;
  @observable sortStatus!: string;
  requestsFetchService!: RequestsFetchService;

  constructor(requestsFetchService: RequestsFetchService) {
    this.requestsFetchService = requestsFetchService;
    this.init();
  }

  @action.bound
  init() {
    this.getRequestsDataAPIStatus = API_INITIAL;
    this.getRequestsDataAPIError = '';
    this.requestsDataFetched = [];
    this.getSearchRequestsDataAPIStatus = API_INITIAL;
    this.getSearchRequestsDataAPIError = '';
    this.filterStatus = '';
    this.sortStatus = '';
  }

  @action.bound
  setGetRequestsDataAPIStatus(status: APIStatus) {
    this.getRequestsDataAPIStatus = status;
  }

  @action.bound
  setRequestsDataAPIResponse(response: EachRequestFetchType[]) {
    let eachRequestData: RequestModal;
    this.requestsDataFetched = response.map(
      (eachResponse: EachRequestFetchType) =>
        (eachRequestData = new RequestModal(eachResponse))
    );
  }

  @action.bound
  setGetRequestsDataAPIError(err: any) {
    this.getRequestsDataAPIError = err;
  }

  getRequestsDataAPI(
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getRequestsDataPromise = this.requestsFetchService.getRequestsData();

    return bindPromiseWithOnSuccess(getRequestsDataPromise)
      .to(this.setGetRequestsDataAPIStatus, (response) => {
        this.setRequestsDataAPIResponse(response as EachRequestFetchType[]);
      })
      .catch((err) => {
        this.setGetRequestsDataAPIError(err);
        onFailure();
      });
  }

  @action.bound
  setGetSearchRequestsDataAPIStatus(status: APIStatus) {
    this.getSearchRequestsDataAPIStatus = status;
  }

  @action.bound
  setGetSearchRequestsDataAPIError(err: any) {
    this.getSearchRequestsDataAPIError = err;
  }

  getSearchRequestsDataAPI(
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getSearchRequestsDataPromise = this.requestsFetchService.getSearchRequestsData();

    return bindPromiseWithOnSuccess(getSearchRequestsDataPromise)
      .to(this.setGetSearchRequestsDataAPIStatus, (response) => {
        this.setRequestsDataAPIResponse(response as EachRequestFetchType[]);
        onSuccess();
      })
      .catch((err) => {
        this.setGetSearchRequestsDataAPIError(err);
        onFailure();
      });
  }

  @action.bound
  setSortStatus(value: string) {
    this.sortStatus = value;
  }

  @action.bound
  setFilterStatus(value: string) {
    this.filterStatus = value;
  }

  @computed get sortedDataWithFiltering(): RequestModal[] {
    let resultSortedData = this.requestsDataFetched;
    if (this.filterStatus !== '') {
      resultSortedData = resultSortedData.filter(
        (eachData) => eachData.resource === this.filterStatus
      );
    }

    if (this.sortStatus !== '') {
      const camelCaseSortStatus: string = camelCase(this.sortStatus);

      return resultSortedData.sort(function (a: any, b: any) {
        if (a[camelCaseSortStatus] < b[camelCaseSortStatus]) {
          return -1;
        }
        if (a[camelCaseSortStatus] > b[camelCaseSortStatus]) {
          return 1;
        }
        return 0;
      });
    }
    return resultSortedData;
  }
}

export default RequestsStore;
