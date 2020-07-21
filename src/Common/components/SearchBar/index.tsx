import React, { Component } from 'react';

import { CustomSearchBar } from './styledComponents';

interface Props {
  id?: string;
  placeholder: string;
  onEnterPress: () => {};
}

class SearchBar extends Component<Props> {
  static defaultProps = {
    id: 'custom-search-bar',
    placeholder: 'Search',
    onEnterPress: () => {},
  };

  handleKeyUp = (event: any) => {
    const { onEnterPress } = this.props;
    if (event.key === 'Enter') onEnterPress();
  };

  render() {
    const { placeholder, id } = this.props;
    return (
      <CustomSearchBar
        id={id}
        data-testid='customSearchBar'
        type='text'
        placeholder={placeholder}
        onKeyUp={this.handleKeyUp}
      />
    );
  }
}

export default SearchBar;
