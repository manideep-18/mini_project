export interface EachMyRequestFetchType {
  id: number;
  resource: string;
  item: string;
  access: string;
  status: string;
  remarks: string;
  reason_for_access: string;
}

export interface FormDataRequestType {
  request_id: string;
}

export interface EachMyResourceFetchType {
  resource: string;
  item: string;
  access: string;
  link: string;
}
