import { observable, action } from 'mobx';
import { MyResourcesFetchService } from '../../services/MyResourcesFetchService';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import { EachMyResourceFetchType } from '../types';
import { APIStatus, API_INITIAL } from '@ib/api-constants';
import MyResourceModal from '../Modals/MyResourceModal';

class MyResourcesStore {
  @observable getMyResourcesDataAPIStatus!: APIStatus;
  @observable getMyResourcesDataAPIError!: any;
  @observable myResourcesDataFetched!: MyResourceModal[];
  myResourcesFetchService: MyResourcesFetchService;

  constructor(myResourcesFetchService: MyResourcesFetchService) {
    this.myResourcesFetchService = myResourcesFetchService;
    this.init();
  }

  @action.bound
  init() {
    this.getMyResourcesDataAPIStatus = API_INITIAL;
    this.getMyResourcesDataAPIError = '';
    this.myResourcesDataFetched = [];
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
      (eachData) => (eachMyResourceData = new MyResourceModal(eachData))
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
}

export default MyResourcesStore;
