import React, { Component } from 'react';

import SearchBar from '../../../../../../Common/components/SearchBar';
import DropdownWithLabel from '../../../../../../Common/components/DropdownWithLabel';
import {
  sortConstants,
  filterConstants,
} from '../../../../../constants/DropdownConstants';

import {
  MainContainer,
  ButtonsContainer,
  AcceptButton,
  RejectButton,
} from './styledComponents';
import AcceptModal from '../../../../../common/AcceptModal';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

interface Props {
  checkedItemsLength: number;
  onSortStatusUpdate: (value: string) => void;
  onFilterStatusUpdate: (value: string) => void;
  onSearchEnter: (value: string) => void;
  onAcceptRequests: () => void;
}

@observer
class SearchAndFilterAndButtons extends Component<Props> {
  @observable acceptModalStatus: boolean = false;
  @observable rejectModalStatus: boolean = false;

  onAcceptCancelOrOkClick = (value: string) => {
    this.acceptModalStatus = false;
  };

  onRejectCancelOrRejectClick = (value: string) => {
    const { onAcceptRequests } = this.props;
    this.rejectModalStatus = false;
    if (value === 'Reject') onAcceptRequests();
  };

  handleAcceptModal = () => {
    this.acceptModalStatus = true;
  };

  handleRejectModal = () => {
    this.rejectModalStatus = true;
  };

  render() {
    const {
      onSortStatusUpdate,
      onFilterStatusUpdate,
      onSearchEnter,
      checkedItemsLength,
    } = this.props;
    return (
      <MainContainer>
        <SearchBar onEnterPress={onSearchEnter} />
        <ButtonsContainer>
          {checkedItemsLength > 0 ? (
            <>
              <AcceptButton
                buttonText='Accept'
                onClick={this.handleAcceptModal}
              />
              <RejectButton
                buttonText='Reject'
                onClick={this.handleRejectModal}
              />
            </>
          ) : (
            <>
              <DropdownWithLabel
                sortText='SORT'
                onChange={onSortStatusUpdate}
                dropdownArray={sortConstants}
              />
              <DropdownWithLabel
                sortText='FILTER'
                onChange={onFilterStatusUpdate}
                dropdownArray={filterConstants}
              />
            </>
          )}
        </ButtonsContainer>
        <AcceptModal
          modalStatus={this.acceptModalStatus}
          onCancelOrOkClick={this.onAcceptCancelOrOkClick}
        />
        <AcceptModal
          isRejectActive
          modalStatus={this.rejectModalStatus}
          onCancelOrOkClick={this.onRejectCancelOrRejectClick}
        />
      </MainContainer>
    );
  }
}

export default SearchAndFilterAndButtons;
