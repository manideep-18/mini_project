import {
  ResourcesFetchResponse,
  EachResourceFetchType,
  ResourceDetailsFetchResponse,
  ResourceItemType,
} from '../../stores/types';

export interface ResourceFetchService {
  getResourcesData(): Promise<ResourcesFetchResponse>;
  updateResourcesData(requestObject: EachResourceFetchType): Promise<{}>;
  getResourceDetails(
    requestObject: EachResourceFetchType
  ): Promise<ResourceDetailsFetchResponse>;

  getResourceItemsAfterDelete(
    requestObject: ResourceItemType[]
  ): Promise<ResourceDetailsFetchResponse>;
}
