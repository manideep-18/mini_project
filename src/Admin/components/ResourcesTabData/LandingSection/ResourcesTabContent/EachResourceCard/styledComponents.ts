import styled from 'styled-components';

import Colors from '../../../../../../Common/themes/Colors';
import {
  Typo16DarkBlueGreyHKGroteskMedium,
  Typo12SteelHKGroteskRegular,
  Typo14BrightBlueHKGroteskRegular,
  Typo14SteelHKGroteskRegular,
} from '../../../../../../Common/styleGuide/Typos';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 175px;
  border-radius: 4px;
  border: 1px solid ${Colors.lightBlueGrey};
  background-color: ${Colors.white};
  padding: 24px;
  margin-top: 32px;
  margin-right: 32px;
`;

export const LogoTextContainer = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const ResourceName = styled(Typo16DarkBlueGreyHKGroteskMedium)``;

export const ResourceType = styled(Typo12SteelHKGroteskRegular)`
  margin-top: 4px;
`;

export const ResourceLink = styled(Typo14BrightBlueHKGroteskRegular)`
  margin-top: 20px;
  text-decoration: none;
`;

export const ResourceDescription = styled(Typo14SteelHKGroteskRegular)`
  margin-top: 8px;
`;
