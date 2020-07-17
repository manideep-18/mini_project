import React, { Component } from 'react';

import { ResourceItemType } from '../../../../stores/types';
import BaseTable from '../../../../../Common/components/BaseTable';

interface Props {
  resourceItemDetails: ResourceItemType[];
}
class ResourceItemsListData extends Component<Props> {
  render() {
    return (
      <div>
        <BaseTable />
      </div>
    );
  }
}

export default ResourceItemsListData;
