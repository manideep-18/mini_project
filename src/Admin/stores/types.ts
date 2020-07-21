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

export interface onAcceptRequestsDataRequestType {
  id: number;
}
