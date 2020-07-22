import { EachUserDataFetchType, userItemRequestType } from '../../stores/types';

export interface UsersFetchService {
  getUsersData(): Promise<EachUserDataFetchType[]>;

  getUserItemData(request: userItemRequestType): Promise<EachUserDataFetchType>;
}
