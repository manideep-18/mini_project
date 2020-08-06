import { observable } from 'mobx';

import { EachMyResourceFetchType } from '../../types';

class MyResourceModal {
  @observable resource: string;
  @observable item: string;
  @observable access: string;
  @observable link: string;

  constructor(myResourceData: EachMyResourceFetchType) {
    this.resource = myResourceData.resource;
    this.item = myResourceData.item;
    this.access = myResourceData.access;
    this.link = myResourceData.link;
  }
}

export default MyResourceModal;
