import React, { Component } from 'react';
import AriaModal from 'react-aria-modal';

import {
  TextButtonsContainer,
  AcceptText,
  ButtonsContainer,
  CancelButton,
  OkButton,
  RejectionText,
  TextAndTextAreaContainer,
  RejectionTextArea,
} from './styledComponents';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

interface Props {
  isRejectActive?: boolean;
  modalStatus: boolean;
  onCancelClick: () => void;
  onOkClick?: () => void;
  onRejectClick?: () => void;
}

@observer
class CustomModal extends Component<Props> {
  @observable rejectionText: string = '';

  static defaultProps = {
    modalStatus: false,
    onCancelClick: () => {},
  };

  onCancelButtonClick = () => {
    const { onCancelClick } = this.props;
    onCancelClick();
  };

  onOkButtonClick = () => {
    const { onOkClick } = this.props;
    if (onOkClick) onOkClick();
  };

  onRejectButtonClick = () => {
    const { onRejectClick } = this.props;
    if (onRejectClick) onRejectClick();
  };

  handleChangeRejectionText = (value: string) => {};

  renderRejectionTextArea=()=>{
    const {  isRejectActive } = this.props;

    if(isRejectActive){
      return  <TextAndTextAreaContainer>
        <RejectionText>Reason for rejection</RejectionText>
        <RejectionTextArea
          value={this.rejectionText}
          onChange={this.handleChangeRejectionText}
        />
      </TextAndTextAreaContainer>
    }
    return null
  }

  render() {
    const { modalStatus, isRejectActive } = this.props;
    return (
      <AriaModal
        mounted={modalStatus}
        focusDialog
        titleId='Accept Modal'
        verticallyCenter={true}
      >
        <TextButtonsContainer>
          <AcceptText>{`Do you want ${
            isRejectActive ? 'Reject' : 'accept'
          } ?`}</AcceptText>
         {this.renderRejectionTextArea()}
          <ButtonsContainer>
            <CancelButton
              id=''
              buttonText='cancel'
              onClick={this.onCancelButtonClick}
            />
            <OkButton
              data-testid='okButton'
              isRejectActive={isRejectActive}
              buttonText={isRejectActive ? 'Reject' : 'Ok'}
              onClick={
                isRejectActive ? this.onRejectButtonClick : this.onOkButtonClick
              }
            />
          </ButtonsContainer>
        </TextButtonsContainer>
      </AriaModal>
    );
  }
}

export default CustomModal;
