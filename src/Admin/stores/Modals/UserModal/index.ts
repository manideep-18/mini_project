import { observable } from 'mobx';

import { EachUserItemsListDataType, EachUserDataFetchType } from '../../types';

class UserModal {
  @observable personName: string;
  @observable department: string;
  @observable jobRole: string;
  @observable itemsList: EachUserItemsListDataType[];

  constructor(eachUserData: EachUserDataFetchType) {
    this.personName = eachUserData.person_name;
    this.department = eachUserData.department;
    this.jobRole = eachUserData.job_role;
    this.itemsList = eachUserData.items;
  }
}

export default UserModal;
