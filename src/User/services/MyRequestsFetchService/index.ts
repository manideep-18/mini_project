import { EachMyResourceFetchType } from '../../stores/types';

export interface MyRequestsFetchService {
  getMyRequestsData(): Promise<EachMyResourceFetchType[]>;
}
