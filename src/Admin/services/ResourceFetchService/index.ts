import {
  ResourcesFetchResponse,
  EachResourceFetchType,
} from '../../stores/types';

export interface ResourceFetchService {
  getResourcesData(): Promise<ResourcesFetchResponse>;
  updateResourcesData(requestObject: EachResourceFetchType): Promise<{}>;
}
