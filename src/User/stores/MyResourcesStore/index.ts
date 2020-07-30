import { MyResourceFetchService } from '../../services/MyResourcesFetchService';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import { APIStatus, API_INITIAL } from '@ib/api-constants';
import { observable, action, computed } from 'mobx';

import { camelCase } from '../../../Common/utils/StringConversionUtils';
import {
  ascendingOrderAlphabetical,
  descendingOrderAlphabetical,
} from '../../../Common/utils/SortingDataUtils';

import {
  userInitialSortStatus,
  ascendingSort,
  descendingSort,
} from '../../constants/SortFilterConstants';

import { EachMyResourceFetchType } from '../types';
import MyResourceModal from '../Modals/MyResourceModal';

class MyResourcesStore {
  @observable getMyResourcesDataAPIStatus!: APIStatus;
  @observable getMyResourcesDataAPIError!: any;
  @observable myResourcesData!: MyResourceModal[];
  @observable sortType!: string;
  @observable filterType!: string;
  myResourcesFetchService: MyResourceFetchService;

  constructor(myResourcesFetchService: MyResourceFetchService) {
    this.myResourcesFetchService = myResourcesFetchService;
    this.init();
  }

  @action.bound
  init() {
    this.getMyResourcesDataAPIStatus = API_INITIAL;
    this.getMyResourcesDataAPIError = '';
    this.sortType = '';
    this.filterType = '';
    this.myResourcesData = [];
  }

  @action.bound
  setGetMyResourcesDataAPIStatus(status: APIStatus) {
    this.getMyResourcesDataAPIStatus = status;
  }

  @action.bound
  setGetMyResourcesDataAPIError(error: any) {
    this.setGetMyResourcesDataAPIStatus = error;
  }

  @action.bound
  setGetMyResourcesDataResponse(response: EachMyResourceFetchType[]) {
    let eachMyResourceData;

    this.myResourcesData = response.map(
      (eachResource) => (eachMyResourceData = new MyResourceModal(eachResource))
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
    let resultSortedData = this.myResourcesData;
    if (this.filterType !== '') {
      resultSortedData = resultSortedData.filter(
        (eachData) => eachData.resource === this.filterType
      );
    }

    const camelCaseSortStatus: string = camelCase(userInitialSortStatus);
    if (this.sortType !== '' && this.sortType === ascendingSort) {
      return ascendingOrderAlphabetical(resultSortedData, camelCaseSortStatus);
    } else if (this.sortType !== '' && this.sortType === descendingSort) {
      return descendingOrderAlphabetical(resultSortedData, camelCaseSortStatus);
    }
    return resultSortedData;
  }
}

export default MyResourcesStore;
