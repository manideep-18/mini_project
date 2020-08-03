import {
  EachUserDataFetchType,
  userItemRequestType,
  SearchRequestType,
} from '../../stores/types';

export interface UsersFetchService {
  getUsersData(): Promise<EachUserDataFetchType[]>;

  getSearchUsersData(
    request: SearchRequestType
  ): Promise<EachUserDataFetchType[]>;

  getUserItemData(request: userItemRequestType): Promise<EachUserDataFetchType>;
}
