import { observable } from 'mobx';

import { EachMyRequestFetchType } from '../../types';

class MyRequestModal {
  id: number;
  @observable resource: string;
  @observable item: string;
  @observable access: string;
  @observable status: string;
  @observable remarks: string;
  @observable reasonForAccess: string;

  constructor(myRequestData: EachMyRequestFetchType) {
    this.id = myRequestData.id;
    this.resource = myRequestData.resource;
    this.item = myRequestData.item;
    this.access = myRequestData.access;
    this.status = myRequestData.status;
    this.remarks = myRequestData.remarks;
    this.reasonForAccess = myRequestData.reason_for_access;
  }
}

export default MyRequestModal;
