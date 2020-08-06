import { observable, action } from 'mobx';

import { initialTabStatus } from '../../constants/TabsConstants';

class TabsStore {
  @observable tabStatus: string;

  constructor() {
    this.tabStatus = initialTabStatus;
  }

  @action.bound
  updateTabStatus(type: string) {
    this.tabStatus = type;
  }
}

export default TabsStore;
