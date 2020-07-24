import { observable, action, computed } from 'mobx';
import { MyRequestsFetchService } from '../../services/MyRequestsFetchService';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import { EachMyResourceFetchType } from '../types';
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
  setGetMyRequestsDataResponse(response: EachMyResourceFetchType[]) {
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
        this.setGetMyRequestsDataResponse(
          response as EachMyResourceFetchType[]
        );
        onSuccess();
      })
      .catch((err) => {
        this.setGetMyRequestsDataAPIError(err);
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
