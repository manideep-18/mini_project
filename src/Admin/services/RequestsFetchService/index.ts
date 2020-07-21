import { EachRequestFetchType } from '../../stores/types';

export interface RequestsFetchService {
  getRequestsData(): Promise<EachRequestFetchType[]>;

  getSearchRequestsData(): Promise<EachRequestFetchType[]>;

  getOnAcceptRequestsData(): Promise<EachRequestFetchType[]>;
}
