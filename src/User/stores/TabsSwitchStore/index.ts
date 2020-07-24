import { observable, action } from 'mobx';

class TabsSwitchStore {
  @observable tabStatus: string;

  constructor() {
    this.tabStatus = 'My Resources';
  }

  @action.bound
  updateTabStatus(tabStatus: string) {
    this.tabStatus = tabStatus;
  }
}

export default TabsSwitchStore;
