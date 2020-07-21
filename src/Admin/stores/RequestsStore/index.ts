import { observable, action } from 'mobx';
import { APIStatus, API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

import { RequestsFetchService } from '../../services/RequestsFetchService';

import { EachRequestFetchType } from '../types';
import RequestModal from '../Modals/RequestModal';

class RequestsStore {
  @observable getRequestsDataAPIStatus!: APIStatus;
  @observable getRequestsDataAPIError: any;
  @observable requestsDataFetched!: RequestModal[];
  @observable getSortedRequestsDataAPIStatus!: APIStatus;
  @observable getSortedRequestsDataAPIError!: any;
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
    this.getSortedRequestsDataAPIStatus = API_INITIAL;
    this.getSortedRequestsDataAPIError = '';
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
  setGetSortedRequestsDataAPIStatus(status: APIStatus) {
    this.getSortedRequestsDataAPIStatus = status;
  }

  @action.bound
  setGetSortedRequestsDataAPIError(err: any) {
    this.getSortedRequestsDataAPIError = err;
  }

  getSortedRequestsDataAPI(
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getSortedRequestsDataPromise = this.requestsFetchService.getSortedRequestsData();

    return bindPromiseWithOnSuccess(getSortedRequestsDataPromise)
      .to(this.setGetSortedRequestsDataAPIStatus, (response) => {
        this.setRequestsDataAPIResponse(response as EachRequestFetchType[]);
        onSuccess();
      })
      .catch((err) => {
        this.setGetSortedRequestsDataAPIError(err);
        onFailure();
      });
  }
}

export default RequestsStore;
