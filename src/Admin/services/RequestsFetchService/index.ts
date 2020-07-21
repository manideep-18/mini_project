import {
  EachRequestFetchType,
  onAcceptRequestsDataRequestType,
} from '../../stores/types';

export interface RequestsFetchService {
  getRequestsData(): Promise<EachRequestFetchType[]>;

  getSearchRequestsData(): Promise<EachRequestFetchType[]>;

  getOnAcceptRequestsData(
    request: onAcceptRequestsDataRequestType[]
  ): Promise<EachRequestFetchType[]>;
}
