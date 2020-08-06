import React, { Component } from 'react';
import { APIStatus, API_INITIAL } from '@ib/api-constants';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import {
  sortConstants,
  filterConstants,
} from '../../constants/DropdownConstants';

import CustomModal from '../CustomModal';
import SearchBar from '../SearchBar';
import DropdownWithLabel from '../DropdownWithLabel';

import {
  MainContainer,
  ButtonsContainer,
  AcceptButton,
  RejectButton,
} from './styledComponents';

interface Props {
  sortConstants?: string[];
  filterConstants?: string[];
  checkedItemsLength?: number;
  onSortStatusUpdate?: (value: string) => void;
  onFilterStatusUpdate?: (value: string) => void;
  onSearchEnter?: (value: string) => void;
  onAcceptRequests?: () => void;
  onRejectRequests?: () => void;
  onAcceptRequestsStatus?: APIStatus;
}

@observer
class SearchAndFilterAndButtons extends Component<Props> {
  @observable acceptModalStatus: boolean;
  @observable rejectModalStatus: boolean;

  constructor(props: Props) {
    super(props);
    this.acceptModalStatus = false;
    this.rejectModalStatus = false;
  }

  static defaultProps = {
    onAcceptRequests: () => {},
    sortConstants: sortConstants,
    filterConstants: filterConstants,
  };

  onOkClick = () => {
    const { onAcceptRequests } = this.props;
    this.acceptModalStatus = false;
    if (onAcceptRequests) onAcceptRequests();
  };

  onCancelClick = () => {
    this.acceptModalStatus = false;
    this.rejectModalStatus = false;
  };

  onRejectClick = () => {
    const { onRejectRequests } = this.props;
    this.rejectModalStatus = false;
    if (onRejectRequests) onRejectRequests();
  };

  handleAcceptModal = () => {
    this.acceptModalStatus = true;
  };

  handleRejectModal = () => {
    this.rejectModalStatus = true;
  };

  render(): React.ReactNode {
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
        <SearchBar data-testid='searchBar' onEnterPress={onSearchEnter} />
        <ButtonsContainer>
          {checkedItemsLength && checkedItemsLength > 0 ? (
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
                onChange={onSortStatusUpdate ? onSortStatusUpdate : () => {}}
                dropdownArray={sortConstants}
              />
              <DropdownWithLabel
                sortText='FILTER'
                onChange={
                  onFilterStatusUpdate ? onFilterStatusUpdate : () => {}
                }
                dropdownArray={filterConstants}
              />
            </>
          )}
        </ButtonsContainer>
        <CustomModal
          modalStatus={this.acceptModalStatus}
          onCancelClick={this.onCancelClick}
          onOkClick={this.onOkClick}
        />
        <CustomModal
          isRejectActive
          modalStatus={this.rejectModalStatus}
          onCancelClick={this.onCancelClick}
          onRejectClick={this.onRejectClick}
        />
      </MainContainer>
    );
  }
}

export default SearchAndFilterAndButtons;
