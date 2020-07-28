import React, { Component } from 'react';

import {
  AllFieldsMainContainer,
  LeftSideFieldsContainer,
  RightSideFieldsContainer,
} from './styledComponents';
import MyRequestsStore from '../../../../stores/MyRequestsStore';
import LabelWithInput from '../../../../../Common/components/LabelWithInput';
import { observer } from 'mobx-react';
import CustomizedSelectWithLabel from '../../../../../Common/components/CustomizedSelectWithLabel';
import {
  accessLevelOptions,
  resourceNameOptions,
  itemOptions,
} from '../../../../constants/SelectOptionsConstants';
import { observable } from 'mobx';

interface Option {
  label: string;
  value: string;
}

interface Props {
  myRequestsStore: MyRequestsStore;
}

@observer
export class RequestingFormFields extends Component<Props> {
  @observable remarks: string;
  @observable resourceNameSelected: Option;
  @observable itemNameSelected: Option;
  @observable accessLevelSelected: Option;

  constructor(props: Props) {
    super(props);
    this.accessLevelSelected = { label: '', value: '' };
    this.resourceNameSelected = { label: '', value: '' };
    this.itemNameSelected = { label: '', value: '' };
    this.remarks = '';
  }

  handleRemarksTextChange = (event: any) => {
    this.remarks = event.target.value;
  };

  handleAccessLevelOptions = (status: Option) => {
    this.accessLevelSelected = status;
  };

  handleItemNameOptions = (status: Option) => {
    this.itemNameSelected = status;
  };

  handleResourceNameOptions = (status: Option) => {
    this.resourceNameSelected = status;
  };

  render() {
    const { myRequestsStore } = this.props;
    const { requestDataFetched } = myRequestsStore;
    const {
      resource,
      item,
      access,
      remarks,
      reasonForAccess,
      status,
    } = requestDataFetched;

    return (
      <AllFieldsMainContainer>
        <LeftSideFieldsContainer>
          {resource !== '' ? (
            <LabelWithInput
              labelText='resource name'
              value={resource}
              disabled
            />
          ) : (
            <CustomizedSelectWithLabel
              labelText='resource name'
              options={resourceNameOptions}
              selectedOption={this.resourceNameSelected}
              onChange={this.handleResourceNameOptions}
            />
          )}
          {item !== '' ? (
            <LabelWithInput labelText='item name' value={item} disabled />
          ) : (
            <CustomizedSelectWithLabel
              labelText='resource name'
              options={itemOptions}
              selectedOption={this.itemNameSelected}
              onChange={this.handleItemNameOptions}
            />
          )}
          {access !== '' ? (
            <LabelWithInput labelText='Access Level' value={access} disabled />
          ) : (
            <CustomizedSelectWithLabel
              labelText='Access Level'
              options={accessLevelOptions}
              selectedOption={this.accessLevelSelected}
              onChange={this.handleAccessLevelOptions}
            />
          )}
          {remarks !== '' ? (
            <LabelWithInput
              isTextArea
              labelText='remarks'
              value={remarks}
              disabled
            />
          ) : (
            <LabelWithInput
              isTextArea
              labelText='remarks'
              value={this.remarks}
              onChange={this.handleRemarksTextChange}
            />
          )}
        </LeftSideFieldsContainer>
        <RightSideFieldsContainer>
          <LabelWithInput
            isTextArea
            labelText='reason for access'
            value={reasonForAccess}
            disabled
          />
          <LabelWithInput labelText='status' value={status} disabled />
        </RightSideFieldsContainer>
      </AllFieldsMainContainer>
    );
  }
}

export default RequestingFormFields;
