import { observable } from 'mobx';

import { EachRequestFetchType } from '../../types';

class RequestModal {
  @observable personName: string = '';
  @observable resource: string = '';
  @observable item: string = '';
  @observable accessLevel: string = '';
  @observable dueDateTime: string = '';

  constructor(requestData: EachRequestFetchType) {
    this.personName = requestData.person_name;
    this.resource = requestData.resource;
    this.item = requestData.item;
    this.accessLevel = requestData.access_level;
    this.dueDateTime = requestData.due_date_time;
  }
}

export default RequestModal;
