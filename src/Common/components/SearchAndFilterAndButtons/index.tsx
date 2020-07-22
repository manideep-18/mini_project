import React, { Component } from 'react';

import SearchBar from '../SearchBar';
import DropdownWithLabel from '../DropdownWithLabel';

import {
  MainContainer,
  ButtonsContainer,
  AcceptButton,
  RejectButton,
} from './styledComponents';
import AcceptModal from '../../../Admin/common/AcceptModal';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { APIStatus, API_INITIAL } from '@ib/api-constants';
import {
  requestSortConstants,
  requestFilterConstants,
} from '../../../Admin/constants/DropdownConstants';

interface Props {
  sortConstants: string[];
  filterConstants: string[];
  checkedItemsLength: number;
  onSortStatusUpdate: (value: string) => void;
  onFilterStatusUpdate: (value: string) => void;
  onSearchEnter: (value: string) => void;
  onAcceptRequests: () => void;
  onAcceptRequestsStatus: APIStatus;
}

@observer
class SearchAndFilterAndButtons extends Component<Props> {
  @observable acceptModalStatus: boolean = false;
  @observable rejectModalStatus: boolean = false;

  static defaultProps = {
    onAcceptRequests: () => {},
    onAcceptRequestsStatus: API_INITIAL,
    sortConstants: requestSortConstants,
    filterConstants: requestFilterConstants,
  };

  onAcceptCancelOrOkClick = (value: string) => {
    const { onAcceptRequests } = this.props;
    this.acceptModalStatus = false;
    if (value === 'Ok') onAcceptRequests();
  };

  onRejectCancelOrRejectClick = (value: string) => {
    this.rejectModalStatus = false;
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
      onAcceptRequestsStatus,
      sortConstants,
      filterConstants,
    } = this.props;
    return (
      <MainContainer>
        <SearchBar onEnterPress={onSearchEnter} />
        <ButtonsContainer>
          {checkedItemsLength > 0 ? (
            <>
              <AcceptButton
                apiStatus={onAcceptRequestsStatus}
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
