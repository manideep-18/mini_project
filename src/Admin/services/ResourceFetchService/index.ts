import {
  EachResourceFetchType,
  ResourceDetailsRequestType,
  AddItemToResourceRequestType,
  resourceItemsDeleteRequestType,
} from '../../stores/types';

export interface ResourceFetchService {
  getResourcesData(): Promise<EachResourceFetchType[]>;
  onAddResourceData(requestObject: EachResourceFetchType): Promise<{}>;
  getResourceDetails(
    requestObject: ResourceDetailsRequestType
  ): Promise<EachResourceFetchType>;

  getResourceItemsAfterDelete(
    requestObject: resourceItemsDeleteRequestType[]
  ): Promise<EachResourceFetchType>;

  onAddItemToResource(requestObject: AddItemToResourceRequestType): Promise<{}>;

  getSearchResourceItemsData(): Promise<EachResourceFetchType>;
}
