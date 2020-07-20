import { EachRequestFetchType } from '../../stores/types';

export interface RequestsFetchService {
  getRequestsData(): Promise<EachRequestFetchType[]>;
}
