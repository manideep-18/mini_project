import { observable, action, computed } from 'mobx';
import { MyRequestsFetchService } from '../../services/MyRequestsFetchService';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import { EachMyRequestFetchType, FormDataRequestType } from '../types';
import { APIStatus, API_INITIAL } from '@ib/api-constants';
import MyRequestModal from '../Modals/MyRequestModal';
import { camelCase } from '../../../Common/utils/StringConversionUtils';
import {
  myRequestsInitialSortStatus,
  ascendingSort,
  descendingSort,
} from '../../constants/SortFilterConstants';
import {
  ascendingOrderAlphabetical,
  descendingOrderAlphabetical,
} from '../../../Common/utils/SortingDataUtils';

class MyRequestsStore {
  @observable getMyRequestsDataAPIStatus!: APIStatus;
  @observable getMyRequestsDataAPIError!: any;
  @observable myRequestsDataFetched!: MyRequestModal[];
  @observable getMyRequestRejectedDataAPIStatus!: APIStatus;
  @observable getMyRequestRejectedDataAPIError!: any;
  @observable requestDataFetched!: MyRequestModal;
  @observable getMyRequestPendingDataAPIStatus!: APIStatus;
  @observable getMyRequestPendingDataAPIError!: any;
  @observable getMyRequestAcceptDataAPIStatus!: APIStatus;
  @observable getMyRequestAcceptDataAPIError!: any;
  @observable sortType!: string;
  @observable filterType!: string;
  myRequestsFetchService: MyRequestsFetchService;

  constructor(myRequestsFetchService: MyRequestsFetchService) {
    this.myRequestsFetchService = myRequestsFetchService;
    this.init();
  }

  @action.bound
  init() {
    this.getMyRequestsDataAPIStatus = API_INITIAL;
    this.getMyRequestsDataAPIError = '';
    this.myRequestsDataFetched = [];
    this.getMyRequestRejectedDataAPIStatus = API_INITIAL;
    this.getMyRequestRejectedDataAPIError = '';
    this.getMyRequestPendingDataAPIStatus = API_INITIAL;
    this.getMyRequestPendingDataAPIError = '';
    this.getMyRequestAcceptDataAPIStatus = API_INITIAL;
    this.getMyRequestAcceptDataAPIError = '';
    this.requestDataFetched = {
      id: 0,
      resource: '',
      item: '',
      access: '',
      status: '',
      remarks: '',
      reasonForAccess: '',
    };
    this.sortType = '';
    this.filterType = '';
  }

  @action.bound
  setGetMyRequestsDataAPIStatus(status: APIStatus) {
    this.getMyRequestsDataAPIStatus = status;
  }

  @action.bound
  setGetMyRequestsDataAPIError(err: any) {
    this.getMyRequestsDataAPIError = err;
  }

  @action.bound
  setGetMyRequestsDataResponse(response: EachMyRequestFetchType[]) {
    let eachMyResourceData;
    this.myRequestsDataFetched = response.map(
      (eachData) => (eachMyResourceData = new MyRequestModal(eachData))
    );
  }

  getMyRequestsDataAPI(
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getMyRequestsDataPromise = this.myRequestsFetchService.getMyRequestsData();

    return bindPromiseWithOnSuccess(getMyRequestsDataPromise)
      .to(this.setGetMyRequestsDataAPIStatus, (response) => {
        this.setGetMyRequestsDataResponse(response as EachMyRequestFetchType[]);
        onSuccess();
      })
      .catch((err) => {
        this.setGetMyRequestsDataAPIError(err);
        onFailure();
      });
  }

  @action.bound
  setRequestDataFetched(requestData: EachMyRequestFetchType) {
    this.requestDataFetched = new MyRequestModal(requestData);
  }

  @action.bound
  setGetMyRequestRejectedDataAPIStatus(status: APIStatus) {
    this.getMyRequestRejectedDataAPIStatus = status;
  }

  @action.bound
  setGetMyRequestRejectedDataAPIError(error: any) {
    this.getMyRequestRejectedDataAPIError = error;
  }

  getMyRequestRejectedDataAPI(
    request: FormDataRequestType,
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getMyRequestRejectedDataPromise = this.myRequestsFetchService.getMyRequestRejectedData(
      request
    );

    return bindPromiseWithOnSuccess(getMyRequestRejectedDataPromise)
      .to(this.setGetMyRequestRejectedDataAPIStatus, (response) => {
        this.setRequestDataFetched(response as EachMyRequestFetchType);
        onSuccess();
      })
      .catch((err) => {
        this.setGetMyRequestRejectedDataAPIError(err);
        onFailure();
      });
  }

  @action.bound
  setGetMyRequestPendingDataAPIStatus(status: APIStatus) {
    this.getMyRequestPendingDataAPIStatus = status;
  }

  @action.bound
  setGetMyRequestPendingDataAPIError(error: any) {
    this.getMyRequestPendingDataAPIError = error;
  }

  getMyRequestPendingDataAPI(
    request: FormDataRequestType,
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getMyRequestPendingDataPromise = this.myRequestsFetchService.getMyRequestPendingData(
      request
    );

    return bindPromiseWithOnSuccess(getMyRequestPendingDataPromise)
      .to(this.setGetMyRequestPendingDataAPIStatus, (response) => {
        this.setRequestDataFetched(response as EachMyRequestFetchType);
        onSuccess();
      })
      .catch((err) => {
        this.setGetMyRequestPendingDataAPIError(err);
        onFailure();
      });
  }

  @action.bound
  setGetMyRequestAcceptDataAPIStatus(status: APIStatus) {
    this.getMyRequestAcceptDataAPIStatus = status;
  }

  @action.bound
  setGetMyRequestAcceptDataAPIError(error: any) {
    this.getMyRequestAcceptDataAPIError = error;
  }

  getMyRequestAcceptDataAPI(
    request: FormDataRequestType,
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getMyRequestAcceptDataPromise = this.myRequestsFetchService.getMyRequestAcceptData(
      request
    );

    return bindPromiseWithOnSuccess(getMyRequestAcceptDataPromise)
      .to(this.setGetMyRequestAcceptDataAPIStatus, (response) => {
        this.setRequestDataFetched(response as EachMyRequestFetchType);
        onSuccess();
      })
      .catch((err) => {
        this.setGetMyRequestAcceptDataAPIError(err);
        onFailure();
      });
  }

  @action.bound
  setSortType(value: string) {
    this.sortType = value;
  }

  @action.bound
  setFilterType(value: string) {
    this.filterType = value;
  }

  @computed get sortedDataWithFiltered() {
    let resultSortedData = this.myRequestsDataFetched;
    if (this.filterType !== '') {
      resultSortedData = resultSortedData.filter(
        (eachData) => eachData.resource === this.filterType
      );
    }

    const camelCaseSortStatus: string = camelCase(myRequestsInitialSortStatus);
    if (this.sortType !== '' && this.sortType === ascendingSort) {
      return ascendingOrderAlphabetical(resultSortedData, camelCaseSortStatus);
    } else if (this.sortType !== '' && this.sortType === descendingSort) {
      return descendingOrderAlphabetical(resultSortedData, camelCaseSortStatus);
    }
    return resultSortedData;
  }
}

export default MyRequestsStore;
