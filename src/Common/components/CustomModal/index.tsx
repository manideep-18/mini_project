import React, { Component } from 'react';
import AriaModal from 'react-aria-modal';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

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

  onCancelButtonClick = (): void => {
    const { onCancelClick } = this.props;
    onCancelClick();
  };

  onOkButtonClick = (): void => {
    const { onOkClick } = this.props;
    if (onOkClick) onOkClick();
  };

  onRejectButtonClick = (): void => {
    const { onRejectClick } = this.props;
    if (onRejectClick) onRejectClick();
  };

  handleChangeRejectionText = (value: string): void => {};

  renderRejectionTextArea = (): React.ReactNode => {
    const { isRejectActive } = this.props;
    if (isRejectActive) {
      return (
        <TextAndTextAreaContainer>
          <RejectionText>Reason for rejection</RejectionText>
          <RejectionTextArea
            value={this.rejectionText}
            onChange={this.handleChangeRejectionText}
          />
        </TextAndTextAreaContainer>
      );
    }
    return null;
  };

  


  render(): React.ReactNode {
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
<<<<<<< HEAD:src/Admin/common/CustomModal/index.tsx
         {this.renderRejectionTextArea()}
=======
          {this.renderRejectionTextArea()}
>>>>>>> d68f8c67a1512791922b5b75a0143f310a443c6d:src/Common/components/CustomModal/index.tsx
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
