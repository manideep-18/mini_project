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
