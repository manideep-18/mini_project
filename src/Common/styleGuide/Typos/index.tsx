import styled from 'styled-components';

import Colors from '../../themes/Colors';
//TODO: remove duplicates
export const BaseText = styled.span`
  font-family: 'Roboto';
  white-space: pre-wrap;
`;

export const BaseRobotoText = styled(BaseText)`
  font-family: 'Roboto';
`;

export const BaseRobotoMonoText = styled(BaseText)`
  font-family: 'Roboto Mono';
`;

export const BaseOswaldText = styled(BaseText)`
  font-family: 'Oswald';
`;

export const BaseOswaldBoldText = styled(BaseOswaldText)`
  font-weight: bold;
`;

export const BaseHKGroteskText = styled(BaseText)`
  font-family: 'HKGroteskRegular';
`;

export const BaseHKGroteskBoldText = styled(BaseHKGroteskText)`
  font-weight: bold;
`;

export const BaseHKGroteskSemiBoldText = styled(BaseHKGroteskText)`
  font-weight: 600;
`;

export const BaseHKGroteskMediumText = styled(BaseHKGroteskText)`
  font-weight: 500;
`;

export const BaseRobotoMediumText = styled(BaseText)`
  font-weight: 500;
`;

export const BaseRobotoBoldText = styled(BaseText)`
  font-weight: bold;
`;

export const BaseRobotoLightText = styled(BaseText)`
  font-weight: 300;
`;

export const BaseOpenSansText = styled(BaseText)`
  font-family: 'Open Sans';
`;

export const BasePoppinsText = styled(BaseText)`
  font-family: 'Poppins';
`;

export const BasePoppinsMedium = styled(BasePoppinsText)`
  font-weight: 500;
`;

export const BasePoppinsSemiBold = styled(BasePoppinsText)`
  font-weight: 600;
`;

export const BaseInterText = styled(BaseText)`
  font-family: 'Inter';
`;

export const BaseInterMediumText = styled(BaseInterText)`
  font-weight: 500;
`;

export const Typo12SteelHKGroteskRegular = styled(BaseHKGroteskText)`
  font-size: 12px;
  color: ${Colors.steel};
`;

export const Typo12SteelHKGroteskSemiBold = styled(BaseHKGroteskSemiBoldText)`
  font-size: 12px;
  color: ${Colors.steel};
`;

export const Typo12SteelHKGroteskMedium = styled(BaseHKGroteskMediumText)`
  font-size: 12px;
  color: ${Colors.steel};
`;

export const Typo12DarkBlueGreyHKGroteskSemiBold = styled(
  BaseHKGroteskSemiBoldText
)`
  font-size: 12px;
  color: ${Colors.darkBlueGrey};
`;

export const Typo16DarkBlueGreyHKGroteskMedium = styled(
  BaseHKGroteskMediumText
)`
  font-size: 16px;
  color: ${Colors.darkBlueGrey};
`;
export const Typo14WhiteHKGroteskSemiBold = styled(BaseHKGroteskSemiBoldText)`
  font-size: 14px;
  color: ${Colors.white};
`;

export const Typo14BrightBlueHKGroteskRegular = styled(BaseHKGroteskText)`
  font-size: 14px;
  color: ${Colors.brightBlue};
`;

export const Typo14SteelHKGroteskRegular = styled(BaseHKGroteskText)`
  font-size: 14px;
  color: ${Colors.steel};
`;

export const Typo14DarkBlueGreyHKGroteskRegular = styled(BaseHKGroteskText)`
  font-size: 14px;
  color: ${Colors.darkBlueGrey};
`;

export const Typo24DarkBlueGreyHKGroteskRegular = styled(BaseHKGroteskText)`
  font-size: 24px;
  color: ${Colors.darkBlueGrey};
`;

export const Typo32DarkBlueGreyHKGroteskRegular = styled(BaseHKGroteskText)`
  font-size: 32px;
  color: ${Colors.darkBlueGrey};
`;
