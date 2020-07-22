import styled from 'styled-components';

import Colors from '../../../../../Common/themes/Colors';
import {
  Typo24WhiteHKGroteskRegular,
  Typo32DarkBlueGreyHKGroteskRegular,
  Typo12DarkBlueGreyHKGroteskSemiBold,
} from '../../../../../Common/styleGuide/Typos';

export const IconContentContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const IconContainer = styled(Typo24WhiteHKGroteskRegular)`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  background-color: ${Colors.turquoiseBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextsContainer = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
`;

export const PersonName = styled(Typo32DarkBlueGreyHKGroteskRegular)``;

export const Department = styled(Typo12DarkBlueGreyHKGroteskSemiBold)`
  margin-top: 9px;
  margin-bottom: 12px;
`;

export const JobRole = styled(Typo12DarkBlueGreyHKGroteskSemiBold)``;
