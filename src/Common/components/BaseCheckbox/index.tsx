import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, toJS } from 'mobx';

import { ResourceItemType } from '../../../Admin/stores/types';

import { CustomCheckBox } from './styledComponents';

interface Props {
  value: any;
  onChange: (value: any, checked: boolean) => void;
  eachData?: ResourceItemType;
}

@observer
export class BaseCheckBox extends Component<Props> {
  @observable checkedStatus: boolean;

  constructor(props: Props) {
    super(props);
    this.checkedStatus = false;
  }

  handleChange = (event: any) => {
    const { onChange, eachData } = this.props;
    this.checkedStatus = !this.checkedStatus;
    onChange(eachData, this.checkedStatus);
  };

  render() {
    const { value } = this.props;
    return (
      <CustomCheckBox
        type='checkbox'
        checked={this.checkedStatus}
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}

export default BaseCheckBox;
