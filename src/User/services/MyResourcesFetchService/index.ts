import { EachMyResourceFetchType } from '../../stores/types';

export interface MyResourcesFetchService {
  getMyResourcesData(): Promise<EachMyResourceFetchType[]>;
}
