import { UsersFetchService } from '../../services/UsersFetchService';
import { observable, action, computed } from 'mobx';
import { APIStatus, API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import { EachUserDataFetchType, userItemRequestType } from '../types';
import UserModal from '../Modals/UserModal';
import { camelCase } from '../../utils/stringConversionUtils';
import {
  ascendingOrderAlphabetical,
  descendingOrderAlphabetical,
} from '../../utils/sortingDataUtils';

class UsersStore {
  @observable getUsersDataAPIStatus!: APIStatus;
  @observable getUsersDataAPIError!: any;
  @observable usersDataFetched!: UserModal[];
  @observable sortType!: string;
  @observable filterType!: string;
  @observable getUserItemDataAPIStatus!: APIStatus;
  @observable getUserItemDataAPIError!: any;
  @observable userItemDataFetched!: UserModal;

  usersFetchService: UsersFetchService;

  constructor(usersFetchService: UsersFetchService) {
    this.usersFetchService = usersFetchService;
    this.init();
  }

  @action.bound
  init() {
    this.getUsersDataAPIStatus = API_INITIAL;
    this.getUsersDataAPIError = '';
    this.getUserItemDataAPIStatus = API_INITIAL;
    this.getUserItemDataAPIError = '';
    this.sortType = '';
    this.filterType = '';
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

  @computed get sortedUserItemsDataWithFiltered() {
    let resultSortedData = this.userItemDataFetched.itemsList;
    if (this.filterType !== '') {
      resultSortedData = resultSortedData.filter(
        (eachData) => eachData.resource === this.filterType
      );
    }

    const camelCaseSortStatus: string = camelCase('item');
    if (this.sortType !== '' && this.sortType === 'Ascending') {
      return ascendingOrderAlphabetical(resultSortedData, camelCaseSortStatus);
    } else if (this.sortType !== '' && this.sortType === 'Descending') {
      return descendingOrderAlphabetical(resultSortedData, camelCaseSortStatus);
    }
    return resultSortedData;
  }
}

export default UsersStore;
