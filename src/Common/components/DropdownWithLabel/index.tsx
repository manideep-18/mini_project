import React, { Component } from 'react';

import {
  CustomSelect,
  CustomOption,
  ImageSelectContainer,
  SortIcon,
} from './styledComponents';

interface Props {
  sortText: string;
  dropdownArray: string[];
  onChange: (value: string) => void;
}

class DropdownWithLabel extends Component<Props> {
  static defaultProps = {
    sortText: 'sort',
    dropdownArray: ['ASC', 'DSC'],
  };

  handleChange = (event: any) => {
    const { onChange } = this.props;
    onChange(event.target.value);
    event.persist();
  };

  renderDropdownContents = () => {
    const { dropdownArray } = this.props;

    return dropdownArray.map((eachDropdown) => (
      <CustomOption as='option' key={eachDropdown} value={eachDropdown}>
        {eachDropdown}
      </CustomOption>
    ));
  };

  render(): React.ReactNode {
    const { sortText } = this.props;
    return (
      <ImageSelectContainer>
        <SortIcon
          src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/4f9cb373-b0e0-417c-a806-e3e4e2182106.svg'
          alt='logo'
        />
        <CustomSelect data-testid='customSelect' onChange={this.handleChange}>
          <CustomOption as='option' value=''>
            {sortText}
          </CustomOption>
          {this.renderDropdownContents()}
        </CustomSelect>
      </ImageSelectContainer>
    );
  }
}

export default DropdownWithLabel;
