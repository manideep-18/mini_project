import { ResourcesFetchResponse } from '../../stores/types';

export interface ResourceFetchService {
  getResourcesData(): Promise<ResourcesFetchResponse>;
}
