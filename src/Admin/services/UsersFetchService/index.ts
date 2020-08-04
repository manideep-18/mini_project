import {
  EachUserDataFetchType,
  userItemRequestType,
  SearchRequestType,
  AddItemRequestType,
} from '../../stores/types';

export interface UsersFetchService {
  getUsersData(): Promise<EachUserDataFetchType[]>;

  getSearchUsersData(
    request: SearchRequestType
  ): Promise<EachUserDataFetchType[]>;

  getUserItemData(request: userItemRequestType): Promise<EachUserDataFetchType>;

  getSearchUserItemsData(
    request: SearchRequestType
  ): Promise<EachUserDataFetchType>;

  onAddItemToUserData(request: AddItemRequestType): Promise<{}>;
}
