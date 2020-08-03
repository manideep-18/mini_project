import { EachMyResourceFetchType } from '../../stores/types';

export interface MyResourceFetchService {
  getMyResourcesData(): Promise<EachMyResourceFetchType[]>;

  getSearchMyResourcesData(): Promise<EachMyResourceFetchType[]>;
}
