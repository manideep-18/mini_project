import {
  EachResourceFetchType,
  ResourceDetailsFetchResponse,
  ResourceItemType,
  ResourceDetailsRequestType,
} from '../../stores/types';

export interface ResourceFetchService {
  getResourcesData(): Promise<EachResourceFetchType[]>;
  onAddResourceData(
    requestObject: EachResourceFetchType
  ): Promise<EachResourceFetchType[]>;
  getResourceDetails(
    requestObject: ResourceDetailsRequestType
  ): Promise<EachResourceFetchType>;

  getResourceItemsAfterDelete(
    requestObject: ResourceItemType[]
  ): Promise<EachResourceFetchType>;
}
