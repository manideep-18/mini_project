import styled from 'styled-components';

import Button from '../../../Common/components/Button';
import {
  Typo32DarkBlueGreyHKGroteskRegular,
  Typo12SteelHKGroteskMedium,
} from '../../../Common/styleGuide/Typos';
import Colors from '../../../Common/themes/Colors';
import BaseTextArea from '../../../Common/components/BaseTextArea';

export const TextButtonsContainer = styled.div`
  width: 435px;
  padding: 25px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AcceptText = styled(Typo32DarkBlueGreyHKGroteskRegular)``;

export const ButtonsContainer = styled.div`
  margin-top: 16px;
`;

export const CancelButton = styled(Button)`
  border: solid 1px ${Colors.lightBlueGrey};
  background-color: ${Colors.white};
  padding: 10px 20px;
  text-transform: uppercase;
`;

interface OkButtonProps {
  isRejectActive?: boolean;
}

export const OkButton = styled(Button)<OkButtonProps>`
  margin-left: 32px;
  padding: 10px 20px;
  color: ${Colors.white};
  text-transform: uppercase;
  background-color: ${(props) =>
    props.isRejectActive ? Colors.neonRed : Colors.brightBlue};
`;

export const TextAndTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

export const RejectionText = styled(Typo12SteelHKGroteskMedium)`
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 8px;
`;

export const RejectionTextArea = styled(BaseTextArea)``;
