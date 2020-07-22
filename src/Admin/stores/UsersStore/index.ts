import { UsersFetchService } from '../../services/UsersFetchService';
import { observable, action, computed } from 'mobx';
import { APIStatus, API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import { EachUserDataFetchType } from '../types';
import UserModal from '../Modals/UserModal';
import { camelCase } from '../../utils/stringConversionUtils';
import { ascendingOrderAlphabetical } from '../../utils/sortingDataUtils';

class UsersStore {
  @observable getUsersDataAPIStatus!: APIStatus;
  @observable getUsersDataAPIError!: any;
  @observable usersDataFetched!: UserModal[];
  @observable sortType!: string;
  @observable filterType!: string;
  usersFetchService: UsersFetchService;

  constructor(usersFetchService: UsersFetchService) {
    this.usersFetchService = usersFetchService;
    this.init();
  }

  @action.bound
  init() {
    this.getUsersDataAPIStatus = API_INITIAL;
    this.getUsersDataAPIError = '';
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
}

export default UsersStore;
