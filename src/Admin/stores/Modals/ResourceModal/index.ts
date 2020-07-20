import { observable } from 'mobx';

import { EachResourceFetchType, ResourceItemType } from '../../types';

class ResourceModal {
  @observable logoImageUrl: string = '';
  @observable name: string = '';
  @observable type: string = '';
  @observable link: string = '';
  @observable description: string = '';
  @observable itemsList: ResourceItemType[] = [];

  constructor(resourceObject: EachResourceFetchType) {
    const {
      logo_image_url,
      name,
      type,
      description,
      items_list,
    } = resourceObject;

    this.logoImageUrl = logo_image_url;
    this.name = name;
    this.type = type;
    this.description = description;
    this.itemsList = items_list;
  }
}

export default ResourceModal;
