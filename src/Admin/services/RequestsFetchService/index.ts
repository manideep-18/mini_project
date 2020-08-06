import {
  EachRequestFetchType,
  onAcceptOrRejectRequestsDataRequestType,
} from '../../stores/types';

export interface RequestsFetchService {
  getRequestsData(): Promise<EachRequestFetchType[]>;

  getSearchRequestsData(): Promise<EachRequestFetchType[]>;

  getOnAcceptRequestsData(
    request: onAcceptOrRejectRequestsDataRequestType[]
  ): Promise<EachRequestFetchType[]>;

  getOnRejectRequestsData(
    request: onAcceptOrRejectRequestsDataRequestType[]
  ): Promise<EachRequestFetchType[]>;
}
