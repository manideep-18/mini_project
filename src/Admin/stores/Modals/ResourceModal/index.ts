import { observable } from 'mobx';

import { EachResourceFetchType, ResourceItemType } from '../../types';

class ResourceModal {
  logoImageUrl: string = '';
  name: string = '';
  type: string = '';
  link: string = '';
  description: string = '';
  itemsList: ResourceItemType[] = [];

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
