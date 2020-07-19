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
