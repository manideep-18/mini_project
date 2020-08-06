import { observable, action } from 'mobx';

import { initialTabStatus } from '../../constants/TabStatusConstants';

class TabsSwitchStore {
  @observable tabStatus: string;

  constructor() {
    this.tabStatus = initialTabStatus;
  }

  @action.bound
  updateTabStatus(tabStatus: string) {
    this.tabStatus = tabStatus;
  }
}

export default TabsSwitchStore;
