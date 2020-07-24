import React, { Component } from 'react';
import {
  ItemsText,
  SearchBarButtonContainer,
  ContentContainer,
} from './styledComponents';
import SearchBar from '../../../../../../Common/components/SearchBar';
import DropdownWithLabel from '../../../../../../Common/components/DropdownWithLabel';
import { requestItemSortConstants } from '../../../../../constants/DropdownConstants';

interface Props {
  onSortStatusUpdate: (value: string) => void;
  onEnterPress: (value: string) => void;
}

class SearchBarAndSort extends Component<Props> {
  static defaultProps = {
    onSortStatusUpdate: () => {},
    onEnterPress: () => {},
  };
  render() {
    const { onSortStatusUpdate, onEnterPress } = this.props;
    return (
      <ContentContainer id='resourceItemSearchBar'>
        <ItemsText>Items</ItemsText>
        <SearchBarButtonContainer>
          <SearchBar onEnterPress={onEnterPress} />
          <DropdownWithLabel
            sortText='SORT'
            onChange={onSortStatusUpdate}
            dropdownArray={requestItemSortConstants}
          />
        </SearchBarButtonContainer>
      </ContentContainer>
    );
  }
}

export default SearchBarAndSort;
