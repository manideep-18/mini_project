import styled from 'styled-components';

import { Typo12SteelHKGroteskSemiBold } from '../../styleGuide/Typos';
import Colors from '../../themes/Colors';

import BaseTextArea from '../BaseTextArea';
import BaseInput from '../BaseInput';

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const LabelText = styled(Typo12SteelHKGroteskSemiBold)`
  text-transform: uppercase;
`;

export const LabelInput = styled(BaseInput)`
  margin-top: 8px;
  border: solid 1px ${Colors.lightBlueGrey};
`;

export const LabelTextArea = styled(BaseTextArea)`
  width: 320px;
  margin-top: 8px;
  border: solid 1px ${Colors.lightBlueGrey};
`;
