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
  onAcceptCancelOrOkClick: (value: string) => void;
}

@observer
class AcceptModal extends Component<Props> {
  @observable rejectionText: string = '';

  static defaultProps = {
    modalStatus: false,
    onAcceptCancelOrOkClick: () => {},
  };

  onCancelButtonClick = () => {
    const { onAcceptCancelOrOkClick } = this.props;
    onAcceptCancelOrOkClick('cancel');
  };

  onOkButtonClick = () => {
    const { onAcceptCancelOrOkClick } = this.props;
    onAcceptCancelOrOkClick('ok');
  };

  handleChangeRejectionText = (value: string) => {};

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
          {isRejectActive && (
            <TextAndTextAreaContainer>
              <RejectionText>Reason for rejection</RejectionText>
              <RejectionTextArea
                value={this.rejectionText}
                onChange={this.handleChangeRejectionText}
              />
            </TextAndTextAreaContainer>
          )}
          <ButtonsContainer>
            <CancelButton
              buttonText='cancel'
              onClick={this.onCancelButtonClick}
            />
            <OkButton
              buttonText={isRejectActive ? 'Reject' : 'Ok'}
              onClick={this.onOkButtonClick}
            />
          </ButtonsContainer>
        </TextButtonsContainer>
      </AriaModal>
    );
  }
}

export default AcceptModal;
