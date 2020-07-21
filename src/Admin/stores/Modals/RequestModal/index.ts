import { observable } from 'mobx';

import { EachRequestFetchType } from '../../types';

class RequestModal {
  id: number = 0;
  @observable personName: string = '';
  @observable resource: string = '';
  @observable item: string = '';
  @observable accessLevel: string = '';
  @observable dueDateTime: string = '';

  constructor(requestData: EachRequestFetchType) {
    this.id = requestData.id;
    this.personName = requestData.person_name;
    this.resource = requestData.resource;
    this.item = requestData.item;
    this.accessLevel = requestData.access_level;
    this.dueDateTime = requestData.due_date_time;
  }
}

export default RequestModal;
