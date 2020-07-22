import { EachUserDataFetchType } from '../../stores/types';

export interface UsersFetchService {
  getUsersData(): Promise<EachUserDataFetchType[]>;
}
