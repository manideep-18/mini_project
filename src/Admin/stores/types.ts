export interface EachResourceFetchType {
  logoImageUrl: string;
  resourceName: string;
  resourceType: string;
  resourceLink: string;
  resourceDescription: string;
}

export interface ResourcesFetchResponse {
  resources_data: EachResourceFetchType[];
}

export interface ResourceItemType {
  id: number;
  title: string;
  resourceName?: string;
  description: string;
  link: string;
}

export interface ResourceDetailsFetchResponse {
  resource_details: EachResourceFetchType;
  resource_items_details: ResourceItemType[];
}
