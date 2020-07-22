import { observable, action, computed } from 'mobx';
import { APIStatus, API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

import { RequestsFetchService } from '../../services/RequestsFetchService';
import { camelCase } from '../../utils/stringConversionUtils';
import { ascendingOrderAlphabetical } from '../../utils/sortingDataUtils';

import {
  EachRequestFetchType,
  onAcceptRequestsDataRequestType,
} from '../types';
import RequestModal from '../Modals/RequestModal';

class RequestsStore {
  @observable getRequestsDataAPIStatus!: APIStatus;
  @observable getRequestsDataAPIError: any;
  @observable requestsDataFetched!: RequestModal[];
  @observable getSearchRequestsDataAPIStatus!: APIStatus;
  @observable getSearchRequestsDataAPIError!: any;
  @observable getOnAcceptRequestsDataAPIStatus!: APIStatus;
  @observable getOnAcceptRequestsDataAPIError!: any;
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
    this.getOnAcceptRequestsDataAPIStatus = API_INITIAL;
    this.getOnAcceptRequestsDataAPIError = '';
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
  setGetOnAcceptRequestsDataAPIStatus(status: APIStatus) {
    this.getOnAcceptRequestsDataAPIStatus = status;
  }

  @action.bound
  setGetOnAcceptRequestsDataAPIError(err: any) {
    this.getOnAcceptRequestsDataAPIError = err;
  }

  getOnAcceptRequestsDataAPI(
    request: onAcceptRequestsDataRequestType[],
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getOnAcceptRequestsDataPromise = this.requestsFetchService.getOnAcceptRequestsData(
      request
    );

    return bindPromiseWithOnSuccess(getOnAcceptRequestsDataPromise)
      .to(this.setGetOnAcceptRequestsDataAPIStatus, (response) => {
        this.setRequestsDataAPIResponse(response as EachRequestFetchType[]);
        onSuccess();
      })
      .catch((err) => {
        this.setGetOnAcceptRequestsDataAPIError(err);
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

      return ascendingOrderAlphabetical(resultSortedData, camelCaseSortStatus);
    }
    return resultSortedData;
  }
}

export default RequestsStore;
