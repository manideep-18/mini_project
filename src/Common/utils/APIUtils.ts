import {
  API_INITIAL,
  API_FETCHING,
  API_SUCCESS,
  API_FAILED,
  APIStatus,
} from '@ib/api-constants';

export function isAPISuccess(...args: any) {
  const status = true;
  return Array.from(args).reduce(
    (returnStatus, item: any) =>
      returnStatus && parseInt(item, 10) === API_SUCCESS,
    status
  );
}

export function isAPIFailed(...args: any): boolean {
  return Array.from(args).indexOf(API_FAILED) !== -1;
}

/**
    Takes only network call status of multiple calls and
    returns true if any one of them is in loading condition
  */

export function isAPIFetching(...args: any) {
  const status = false;
  return Array.from(args).reduce(
    (returnStatus, item: any) =>
      returnStatus || parseInt(item, 10) === API_FETCHING,
    status
  );
}

export function isAPIInitial(...args: any) {
  const status = false;
  const initialStatus = Array.from(args).reduce(
    (returnStatus, item: any) =>
      returnStatus || parseInt(item, 10) === API_INITIAL,
    status
  );
  return initialStatus;
}

export function getLoadingStatus(...args: any): APIStatus {
  if (isAPISuccess(...args)) {
    return API_SUCCESS;
  } else if (isAPIFailed(...args)) {
    return API_FAILED;
  } else if (isAPIFetching(...args)) {
    return API_FETCHING;
  } else if (isAPIInitial(...args)) {
    return API_INITIAL;
  }
  return API_SUCCESS;
}
