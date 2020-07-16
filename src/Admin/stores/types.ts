export interface EachResourceFetchType {
  name: string;
  description: string;
}

export interface ResourcesFetchResponse {
  resources_data: EachResourceFetchType[];
}
