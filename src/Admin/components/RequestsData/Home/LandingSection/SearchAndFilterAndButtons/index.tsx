import React, { Component } from 'react';

import SearchBar from '../../../../../../Common/components/SearchBar';
import DropdownWithLabel from '../../../../../../Common/components/DropdownWithLabel';
import { sortConstants } from '../../../../../constants/DropdownConstants';

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
  onFilterStatusUpdate: () => void;
}

@observer
class SearchAndFilterAndButtons extends Component<Props> {
  @observable modalStatus: boolean = false;

  onAcceptCancelOrOkClick = (value: string) => {
    this.modalStatus = false;
  };

  handleAcceptModal = () => {
    this.modalStatus = true;
  };

  handleRejectModal = () => {
    this.modalStatus = true;
  };

  render() {
    const {
      onSortStatusUpdate,
      onFilterStatusUpdate,
      checkedItemsLength,
    } = this.props;
    return (
      <MainContainer>
        <SearchBar />
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
                dropdownArray={[]}
              />
            </>
          )}
        </ButtonsContainer>
        <AcceptModal
          modalStatus={this.modalStatus}
          onAcceptCancelOrOkClick={this.onAcceptCancelOrOkClick}
        />
        <AcceptModal
          isRejectActive
          modalStatus={this.modalStatus}
          onAcceptCancelOrOkClick={this.onAcceptCancelOrOkClick}
        />
      </MainContainer>
    );
  }
}

export default SearchAndFilterAndButtons;
