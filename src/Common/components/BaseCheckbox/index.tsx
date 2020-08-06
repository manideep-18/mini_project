import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import { CustomCheckBox } from './styledComponents';

interface Props {
  value: any;
  onChange: (value: any, checked: boolean) => void;
  eachDataId?: number;
}

@observer
export class BaseCheckBox extends Component<Props> {
  @observable checkedStatus: boolean;

  constructor(props: Props) {
    super(props);
    this.checkedStatus = false;
  }

  handleChange = (event: any): void => {
    const { onChange, eachDataId } = this.props;
    this.checkedStatus = !this.checkedStatus;
    onChange(eachDataId, this.checkedStatus);
  };

  render(): React.ReactNode {
    const { value } = this.props;
    return (
      <CustomCheckBox
        data-testid='customCheckbox'
        type='checkbox'
        checked={this.checkedStatus}
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}

export default BaseCheckBox;
