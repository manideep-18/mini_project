import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import LabelWithInput from '../../../../../Common/components/LabelWithInput';
import CustomizedSelectWithLabel from '../../../../../Common/components/CustomizedSelectWithLabel';

import {
  accessLevelOptions,
  resourceNameOptions,
  itemOptions,
} from '../../../../constants/SelectOptionsConstants';
import MyRequestModal from '../../../../stores/Modals/MyRequestModal';

import {
  AllFieldsMainContainer,
  LeftSideFieldsContainer,
  RightSideFieldsContainer,
  SubmitButton,
  FieldsButtonsContainer,
  ButtonsContainer,
} from './styledComponents';

interface Option {
  label: string;
  value: string;
}

interface Props {
  requestDataFetched: MyRequestModal;
  requestingStatus: string;
  onSubmitClick: () => void;
}

@observer
export class RequestingFormFields extends Component<Props> {
  @observable remarks: string;
  @observable resourceNameSelected: any;
  @observable itemNameSelected: any;
  @observable accessLevelSelected: any;

  constructor(props: Props) {
    super(props);
    this.accessLevelSelected = '';
    this.resourceNameSelected = '';
    this.itemNameSelected = '';
    this.remarks = '';
  }

  handleSubmitButton = () => {
    const { onSubmitClick, requestDataFetched } = this.props;
    const { resource, item, access, remarks } = requestDataFetched;

    if (
      (this.remarks || remarks) &&
      (this.resourceNameSelected || resource) &&
      (this.itemNameSelected || item) &&
      (this.accessLevelSelected || access)
    )
      onSubmitClick();
  };

  renderSubmitButton = () => (
    <SubmitButton buttonText='Submit' onClick={this.handleSubmitButton} />
  );

  handleRemarksTextChange = (value: string) => {
    this.remarks = value;
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

  render(): React.ReactNode {
    const { requestDataFetched, requestingStatus } = this.props;
    const {
      resource,
      item,
      access,
      remarks,
      reasonForAccess,
      status,
    } = requestDataFetched;

    return (
      <FieldsButtonsContainer>
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
                placeholder='Select One Option'
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
                placeholder='Select One Option'
              />
            )}
            {access !== '' ? (
              <LabelWithInput
                labelText='Access Level'
                value={access}
                disabled
              />
            ) : (
              <CustomizedSelectWithLabel
                labelText='Access Level'
                options={accessLevelOptions}
                selectedOption={this.accessLevelSelected}
                onChange={this.handleAccessLevelOptions}
                placeholder='Select One Option'
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
        <ButtonsContainer>
          {requestingStatus !== 'Rejected' && this.renderSubmitButton()}
        </ButtonsContainer>
      </FieldsButtonsContainer>
    );
  }
}

export default RequestingFormFields;
