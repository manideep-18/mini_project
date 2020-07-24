import { observable, action, computed } from 'mobx';
import { MyRequestsFetchService } from '../../services/MyRequestsFetchService';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import { EachMyResourceFetchType } from '../types';
import { APIStatus, API_INITIAL } from '@ib/api-constants';
import MyRequestModal from '../Modals/MyRequestModal';
import { camelCase } from '../../../Common/utils/StringConversionUtils';
import {
  myResourcesInitialSortStatus,
  ascendingSort,
  descendingSort,
} from '../../constants/SortFilterConstants';
import {
  ascendingOrderAlphabetical,
  descendingOrderAlphabetical,
} from '../../../Common/utils/SortingDataUtils';

class MyRequestsStore {
  @observable getMyResourcesDataAPIStatus!: APIStatus;
  @observable getMyResourcesDataAPIError!: any;
  @observable myResourcesDataFetched!: MyRequestModal[];
  @observable sortType!: string;
  @observable filterType!: string;
  myResourcesFetchService: MyRequestsFetchService;

  constructor(myResourcesFetchService: MyRequestsFetchService) {
    this.myResourcesFetchService = myResourcesFetchService;
    this.init();
  }

  @action.bound
  init() {
    this.getMyResourcesDataAPIStatus = API_INITIAL;
    this.getMyResourcesDataAPIError = '';
    this.myResourcesDataFetched = [];
    this.sortType = '';
    this.filterType = '';
  }

  @action.bound
  setGetMyResourcesDataAPIStatus(status: APIStatus) {
    this.getMyResourcesDataAPIStatus = status;
  }

  @action.bound
  setGetMyResourcesDataAPIError(err: any) {
    this.getMyResourcesDataAPIError = err;
  }

  @action.bound
  setGetMyResourcesDataResponse(response: EachMyResourceFetchType[]) {
    let eachMyResourceData;
    this.myResourcesDataFetched = response.map(
      (eachData) => (eachMyResourceData = new MyRequestModal(eachData))
    );
  }

  getMyResourcesDataAPI(
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getMyResourcesDataPromise = this.myResourcesFetchService.getMyResourcesData();

    return bindPromiseWithOnSuccess(getMyResourcesDataPromise)
      .to(this.setGetMyResourcesDataAPIStatus, (response) => {
        this.setGetMyResourcesDataResponse(
          response as EachMyResourceFetchType[]
        );
        onSuccess();
      })
      .catch((err) => {
        this.setGetMyResourcesDataAPIError(err);
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
    let resultSortedData = this.myResourcesDataFetched;
    if (this.filterType !== '') {
      resultSortedData = resultSortedData.filter(
        (eachData) => eachData.resource === this.filterType
      );
    }

    const camelCaseSortStatus: string = camelCase(myResourcesInitialSortStatus);
    if (this.sortType !== '' && this.sortType === ascendingSort) {
      return ascendingOrderAlphabetical(resultSortedData, camelCaseSortStatus);
    } else if (this.sortType !== '' && this.sortType === descendingSort) {
      return descendingOrderAlphabetical(resultSortedData, camelCaseSortStatus);
    }
    return resultSortedData;
  }
}

export default MyRequestsStore;
