import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { APIStatus, API_SUCCESS, API_INITIAL } from '@ib/api-constants';

import { ResourceItemType } from '../../../../../stores/types';
import BaseTable from '../../../../../../Common/components/BaseTable';
import { ButtonsContainer, AddButton, DeleteButton } from './styledComponents';
import LoadingWrapper from '../../../../../../Common/components/LoadingWrapper';

interface Props {
  resourceItemDetails: ResourceItemType[];
  onDeleteResourceItems: (items: ResourceItemType[]) => void;
  onDeleteAPIStatus: APIStatus;
  onAddResourceItem: () => void;
}

@observer
class ResourceItemsListData extends Component<Props> {
  @observable deleteItemsList: ResourceItemType[];
  constructor(props: Props) {
    super(props);
    this.deleteItemsList = [];
  }

  onChangeCheckbox = (value: any, checked: boolean) => {
    if (checked) {
      const resultIndex = this.deleteItemsList.findIndex(
        (eachItem) => eachItem.id === value.id
      );

      if (resultIndex === -1) {
        this.deleteItemsList.push(value);
      }
    } else {
      this.deleteItemsList = this.deleteItemsList.filter(
        (eachItem) => eachItem.id !== value.id
      );
    }
  };

  handleAddResourceItem = () => {
    const { onAddResourceItem } = this.props;
    onAddResourceItem();
  };

  handleDeleteResourceItems = () => {
    const { onDeleteResourceItems } = this.props;
    this.deleteItemsList = [];
    onDeleteResourceItems(this.deleteItemsList);
  };

  renderAddDeleteButtons = () => {
    return (
      <ButtonsContainer>
        <AddButton
          buttonText='ADD ITEM'
          disabled={this.deleteItemsList.length > 0}
          onClick={this.handleAddResourceItem}
        />
        <DeleteButton
          buttonText='DELETE'
          disabled={this.deleteItemsList.length === 0}
          onClick={this.handleDeleteResourceItems}
        />
      </ButtonsContainer>
    );
  };

  render() {
    const { resourceItemDetails, onDeleteAPIStatus } = this.props;
    return (
      <div>
        <LoadingWrapper
          apiStatus={onDeleteAPIStatus}
          onRetry={this.handleDeleteResourceItems}
        >
          <BaseTable
            dataArray={resourceItemDetails}
            onChangeCheckbox={this.onChangeCheckbox}
          />
          {this.renderAddDeleteButtons()}
        </LoadingWrapper>
      </div>
    );
  }
}

export default ResourceItemsListData;
