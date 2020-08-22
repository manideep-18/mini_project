import { observable, action, computed } from 'mobx';
import { APIStatus, API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

import { UsersFetchService } from '../../services/UsersFetchService';
import {
  ascendingOrderAlphabetical,
  descendingOrderAlphabetical,
} from '../../../Common/utils/SortingDataUtils';
import { camelCase } from '../../../Common/utils/StringConversionUtils';
import {
  descendingSort,
  ascendingSort,
  userInitialSortStatus,
} from '../../constants/SortFilterConstants';

import {
  EachUserDataFetchType,
  userItemRequestType,
  SearchRequestType,
  AddItemRequestType,
} from '../types';
import UserModal from '../Modals/UserModal';

class UsersStore {
  @observable getUsersDataAPIStatus!: APIStatus;
  @observable getUsersDataAPIError!: any;
  @observable usersDataFetched!: UserModal[];
  @observable getSearchUsersDataAPIStatus!: APIStatus;
  @observable getSearchUsersDataAPIError!: any;
  @observable sortType!: string;
  @observable filterType!: string;
  @observable getUserItemDataAPIStatus!: APIStatus;
  @observable getUserItemDataAPIError!: any;
  @observable userItemDataFetched!: UserModal;
  @observable getSearchUserItemsDataAPIStatus!: APIStatus;
  @observable getSearchUserItemsDataAPIError!: any;
  @observable onAddItemToUserDataAPIStatus!: APIStatus;
  @observable onAddItemToUserDataAPIError!: any;
  @observable userItemSortType!: string;
  @observable userItemFilterType!: string;

  usersFetchService: UsersFetchService;

  constructor(usersFetchService: UsersFetchService) {
    this.usersFetchService = usersFetchService;
    this.init();
  }

  @action.bound
  init() {
    this.getUsersDataAPIStatus = API_INITIAL;
    this.getUsersDataAPIError = '';
    this.getSearchUsersDataAPIStatus = API_INITIAL;
    this.getSearchUsersDataAPIError = '';
    this.getUserItemDataAPIStatus = API_INITIAL;
    this.getUserItemDataAPIError = '';
    this.getSearchUserItemsDataAPIStatus = API_INITIAL;
    this.getSearchUserItemsDataAPIError = '';
    this.onAddItemToUserDataAPIStatus = API_INITIAL;
    this.onAddItemToUserDataAPIError = '';
    this.sortType = '';
    this.filterType = '';
    this.userItemSortType = '';
    this.userItemFilterType = '';
  }

  @action.bound
  setGetUsersDataAPIResponse(response: EachUserDataFetchType[]) {
    let eachUserData;
    this.usersDataFetched = response.map(
      (eachResponseData) => (eachUserData = new UserModal(eachResponseData))
    );
  }

  @action.bound
  setGetUsersDataAPIStatus(status: APIStatus) {
    this.getUsersDataAPIStatus = status;
  }

  @action.bound
  setGetUsersDataAPIError(err: any) {
    this.getUsersDataAPIError = err;
  }

  getUsersDataAPI(
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getUsersDataPromise = this.usersFetchService.getUsersData();

    return bindPromiseWithOnSuccess(getUsersDataPromise)
      .to(this.setGetUsersDataAPIStatus, (response) => {
        this.setGetUsersDataAPIResponse(response as EachUserDataFetchType[]);
        onSuccess();
      })
      .catch((err) => {
        this.setGetUsersDataAPIError(err);
        onFailure();
      });
  }

  @action.bound
  setGetSearchUsersDataAPIStatus(status: APIStatus) {
    this.getSearchUsersDataAPIStatus = status;
  }

  @action.bound
  setGetSearchUsersDataAPIError(error: any) {
    this.getSearchUsersDataAPIError = error;
  }

  getSearchUsersDataAPI(
    request: SearchRequestType,
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getSearchUsersDataPromise = this.usersFetchService.getSearchUsersData(
      request
    );

    return bindPromiseWithOnSuccess(getSearchUsersDataPromise)
      .to(this.setGetSearchUsersDataAPIStatus, (response) => {
        this.setGetUsersDataAPIResponse(response as EachUserDataFetchType[]);
        onSuccess();
      })
      .catch((err) => {
        this.setGetSearchUsersDataAPIError(err);
        onFailure();
      });
  }

  @action.bound
  setGetUserItemDataAPIStatus(status: APIStatus) {
    this.getUserItemDataAPIStatus = status;
  }

  @action.bound
  setGetUserItemDataAPIResponse(response: EachUserDataFetchType) {
    this.userItemDataFetched = new UserModal(response);
  }

  @action.bound
  setGetUserItemDataAPIError(err: any) {
    this.getUserItemDataAPIError = err;
  }

  getUserItemDataAPI(
    request: userItemRequestType,
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getUserItemDataPromise = this.usersFetchService.getUserItemData(
      request
    );

    return bindPromiseWithOnSuccess(getUserItemDataPromise)
      .to(this.setGetUserItemDataAPIStatus, (response) => {
        this.setGetUserItemDataAPIResponse(response as EachUserDataFetchType);
        onSuccess();
      })
      .catch((err) => {
        this.setGetUserItemDataAPIError(err);
        onFailure();
      });
  }

  @action.bound
  setGetSearchUserItemsDataAPIStatus(status: APIStatus) {
    this.getSearchUserItemsDataAPIStatus = status;
  }

  @action.bound
  setGetSearchUserItemsDataAPIError(error: any) {
    this.getSearchUserItemsDataAPIError = error;
  }

  getSearchUserItemsDataAPI(
    request: SearchRequestType,
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const getSearchUserItemsDataPromise = this.usersFetchService.getSearchUserItemsData(
      request
    );

    return bindPromiseWithOnSuccess(getSearchUserItemsDataPromise)
      .to(this.setGetSearchUserItemsDataAPIStatus, (response) => {
        this.setGetUserItemDataAPIResponse(response as EachUserDataFetchType);
        onSuccess();
      })
      .catch((err) => {
        this.setGetSearchUserItemsDataAPIError(err);
        onFailure();
      });
  }

  @action.bound
  setOnAddItemToUserDataAPIStatus(status: APIStatus) {
    this.onAddItemToUserDataAPIStatus = status;
  }

  @action.bound
  setOnAddItemToUserDataAPIError(error: any) {
    this.onAddItemToUserDataAPIError = error;
  }

  onAddItemToUserDataAPI(
    request: AddItemRequestType,
    onSuccess: Function = () => {},
    onFailure: Function = () => {}
  ) {
    const onAddItemToUserDataPromise = this.usersFetchService.onAddItemToUserData(
      request
    );

    return bindPromiseWithOnSuccess(onAddItemToUserDataPromise)
      .to(this.setOnAddItemToUserDataAPIStatus, (response) => {
        onSuccess();
      })
      .catch((err) => {
        this.setOnAddItemToUserDataAPIError(err);
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
    let resultSortedData = this.usersDataFetched;
    if (this.filterType !== '') {
      resultSortedData = resultSortedData.filter(
        (eachData) => eachData.department === this.filterType
      );
    }

    if (this.sortType !== '') {
      const camelCaseSortStatus: string = camelCase(this.sortType);

      return ascendingOrderAlphabetical(resultSortedData, camelCaseSortStatus);
    }
    return resultSortedData;
  }

  @action.bound
  setUserItemSortType(value: string) {
    this.userItemSortType = value;
  }

  @action.bound
  setUserItemFilterType(value: string) {
    this.userItemFilterType = value;
  }

  @computed get sortedUserItemsDataWithFiltered() {
    let resultSortedData = this.userItemDataFetched.itemsList;
    if (this.userItemFilterType !== '') {
      resultSortedData = resultSortedData.filter(
        (eachData) => eachData.resource === this.userItemFilterType
      );
    }

    const camelCaseSortStatus: string = camelCase(userInitialSortStatus);
    if (
      this.userItemSortType !== '' &&
      this.userItemSortType === ascendingSort
    ) {
      return ascendingOrderAlphabetical(resultSortedData, camelCaseSortStatus);
    } else if (
      this.userItemSortType !== '' &&
      this.userItemSortType === descendingSort
    ) {
      return descendingOrderAlphabetical(resultSortedData, camelCaseSortStatus);
    }
    return resultSortedData;
  }
}

export default UsersStore;
