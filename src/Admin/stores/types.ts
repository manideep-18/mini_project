export interface EachResourceFetchType {
  logo_image_url: string;
  name: string;
  type: string;
  link: string;
  description: string;
  items_list: ResourceItemType[];
}

export interface ResourceItemType {
  id: number;
  title: string;
  description: string;
  link: string;
}

export interface ResourceDetailsFetchResponse {
  resource_details: EachResourceFetchType;
}

export interface ResourceDetailsRequestType {
  resource_name: string;
}

export interface AddItemToResourceRequestType {
  resource_name: string;
  item_name: string;
  link: string;
  description: string;
}

export interface EachRequestFetchType {
  id: number;
  person_name: string;
  resource: string;
  item: string;
  access_level: string;
  due_date_time: string;
}

export interface onAcceptOrRejectRequestsDataRequestType {
  id: number;
}

export interface EachUserItemsListDataType {
  id: number;
  resource: string;
  item: string;
  access: string;
  description: string;
  link: string;
}

export interface SearchRequestType {
  search_request_text: string;
}

export interface EachUserDataFetchType {
  person_name: string;
  department: string;
  job_role: string;
  items: EachUserItemsListDataType[];
}

export interface userItemRequestType {
  person_name: string;
}

export interface resourceItemsDeleteRequestType {
  id: number;
}

export interface LoginOrRegisterRequest {
  user_name: string;
  user_password: string;
}

export interface LoginOrRegisterResponse {
  is_admin_logged_in: boolean;
}
