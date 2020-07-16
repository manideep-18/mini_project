import { observable, action } from 'mobx';

class TabsStore {
  @observable tabStatus: string;

  constructor() {
    this.tabStatus = 'Resources';
  }

  @action.bound
  updateTabStatus(type: string) {
    this.tabStatus = type;
  }
}

export default TabsStore;
