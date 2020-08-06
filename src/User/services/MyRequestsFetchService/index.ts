import {
  EachMyRequestFetchType,
  FormDataRequestType,
} from '../../stores/types';

export interface MyRequestsFetchService {
  getMyRequestsData(): Promise<EachMyRequestFetchType[]>;

  getMyRequestRejectedData(
    request: FormDataRequestType
  ): Promise<EachMyRequestFetchType>;

  getMyRequestPendingData(
    request: FormDataRequestType
  ): Promise<EachMyRequestFetchType>;

  getMyRequestAcceptData(
    request: FormDataRequestType
  ): Promise<EachMyRequestFetchType>;
}
