import { observable } from 'mobx';
import { EachMyResourceFetchType } from '../../types';

class MyRequestModal {
  id: number;
  @observable resource: string;
  @observable item: string;
  @observable access: string;
  @observable status: string;

  constructor(myResourceData: EachMyResourceFetchType) {
    this.id = myResourceData.id;
    this.resource = myResourceData.resource;
    this.item = myResourceData.item;
    this.access = myResourceData.access;
    this.status = myResourceData.status;
  }
}

export default MyRequestModal;
