import React, { Component } from 'react';

import { CustomSearchBar } from './styledComponents';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

interface Props {
  id?: string;
  placeholder: string;
  onEnterPress: (value: string) => void;
}

@observer
class SearchBar extends Component<Props> {
  static defaultProps = {
    id: 'custom-search-bar',
    placeholder: 'Search',
    onEnterPress: () => {},
  };

  @observable searchValue: string;

  constructor(props: Props) {
    super(props);
    this.searchValue = '';
  }

  handleChange = (event: any) => {
    this.searchValue = event.target.value;
  };

  handleKeyUp = (event: any) => {
    const { onEnterPress } = this.props;

    if (event.key === 'Enter') {
      onEnterPress(this.searchValue);
      this.searchValue = '';
    }
  };

  render() {
    const { placeholder, id } = this.props;
    return (
      <CustomSearchBar
        id={id}
        value={this.searchValue}
        data-testid='customSearchBar'
        type='text'
        placeholder={placeholder}
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
      />
    );
  }
}

export default SearchBar;
