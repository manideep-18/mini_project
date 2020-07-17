import {
  ResourcesFetchResponse,
  EachResourceFetchType,
  ResourceDetailsFetchResponse,
} from '../../stores/types';

export interface ResourceFetchService {
  getResourcesData(): Promise<ResourcesFetchResponse>;
  updateResourcesData(requestObject: EachResourceFetchType): Promise<{}>;
  getResourceDetails(
    requestObject: EachResourceFetchType
  ): Promise<ResourceDetailsFetchResponse>;
}
