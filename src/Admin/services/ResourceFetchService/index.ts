import {
  EachResourceFetchType,
  ResourceDetailsFetchResponse,
  ResourceItemType,
  ResourceDetailsRequestType,
  AddItemToResourceRequestType,
} from '../../stores/types';

export interface ResourceFetchService {
  getResourcesData(): Promise<EachResourceFetchType[]>;
  onAddResourceData(requestObject: EachResourceFetchType): Promise<{}>;
  getResourceDetails(
    requestObject: ResourceDetailsRequestType
  ): Promise<EachResourceFetchType>;

  getResourceItemsAfterDelete(
    requestObject: ResourceItemType[]
  ): Promise<EachResourceFetchType>;

  onAddItemToResource(requestObject: AddItemToResourceRequestType): Promise<{}>;
}
