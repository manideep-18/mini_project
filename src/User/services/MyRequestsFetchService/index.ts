import { EachMyResourceFetchType } from '../../stores/types';

export interface MyRequestsFetchService {
  getMyResourcesData(): Promise<EachMyResourceFetchType[]>;
}
