import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { APIStatus, API_INITIAL } from '@ib/api-constants';

import BaseTable from '../../../../../../Common/components/BaseTable';
import LoadingWrapper from '../../../../../../Common/components/LoadingWrapper';
import { ResourceItemType } from '../../../../../stores/types';

import {
  ButtonsContainer,
  AddButton,
  DeleteButton,
  ItemsListButtonsContainer,
} from './styledComponents';

interface Props {
  resourceItemsData: ResourceItemType[];
  onDeleteResourceItems: (items: number[]) => void;
  onDeleteAPIStatus: APIStatus;
  onSearchAPIStatus: APIStatus;
  onAddResourceItem: () => void;
}

@observer
class ResourceItemsListData extends Component<Props> {
  static defaultProps = {
    resourceItemsData: [],
    onDeleteResourceItems: () => {},
    onDeleteAPIStatus: API_INITIAL,
    onSearchAPIStatus: API_INITIAL,
    onAddResourceItem: () => {},
  };

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
    const {
      resourceItemsData,
      onDeleteAPIStatus,
      onSearchAPIStatus,
    } = this.props;

    return (
      <ItemsListButtonsContainer>
        <LoadingWrapper
          apiStatus={onDeleteAPIStatus || onSearchAPIStatus}
          onRetry={this.handleDeleteResourceItems}
        >
          <BaseTable
            dataArray={resourceItemsData}
            onChangeCheckbox={this.onChangeCheckbox}
          />
          {this.renderAddDeleteButtons()}
        </LoadingWrapper>
      </ItemsListButtonsContainer>
    );
  }
}

export default ResourceItemsListData;
