import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { APIStatus } from '@ib/api-constants';

import BaseTable from '../../../../../../Common/components/BaseTable';
import LoadingWrapper from '../../../../../../Common/components/LoadingWrapper';
import ResourceModal from '../../../../../stores/Modals/ResourceModal';

import {
  ButtonsContainer,
  AddButton,
  DeleteButton,
  ItemsListButtonsContainer,
} from './styledComponents';

interface Props {
  resourceDetailsData: ResourceModal;
  onDeleteResourceItems: (items: number[]) => void;
  onDeleteAPIStatus: APIStatus;
  onAddResourceItem: () => void;
}

@observer
class ResourceItemsListData extends Component<Props> {
  @observable deleteItemsList: number[];
  constructor(props: Props) {
    super(props);
    this.deleteItemsList = [];
  }

  onChangeCheckbox = (itemId: any, checked: boolean) => {
    if (checked) {
      const resultIndex = this.deleteItemsList.findIndex(
        (eachId) => itemId === eachId
      );

      if (resultIndex === -1) {
        this.deleteItemsList.push(itemId);
      }
    } else {
      this.deleteItemsList = this.deleteItemsList.filter(
        (eachId) => eachId !== itemId
      );
    }
  };

  handleAddResourceItem = () => {
    const { onAddResourceItem } = this.props;
    onAddResourceItem();
  };

  handleDeleteResourceItems = () => {
    const { onDeleteResourceItems } = this.props;

    onDeleteResourceItems(this.deleteItemsList);
    this.deleteItemsList = [];
  };

  renderAddDeleteButtons = () => (
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

  render() {
    const { resourceDetailsData, onDeleteAPIStatus } = this.props;
    const { itemsList } = resourceDetailsData;
    return (
      <ItemsListButtonsContainer>
        <LoadingWrapper
          apiStatus={onDeleteAPIStatus}
          onRetry={this.handleDeleteResourceItems}
        >
          <BaseTable
            dataArray={itemsList}
            onChangeCheckbox={this.onChangeCheckbox}
          />
          {this.renderAddDeleteButtons()}
        </LoadingWrapper>
      </ItemsListButtonsContainer>
    );
  }
}

export default ResourceItemsListData;
