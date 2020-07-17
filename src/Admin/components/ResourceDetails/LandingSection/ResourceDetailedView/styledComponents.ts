import styled from 'styled-components';

import {
  Typo32DarkBlueGreyHKGroteskRegular,
  Typo14BrightBlueHKGroteskRegular,
  Typo14SteelHKGroteskRegular,
} from '../../../../../Common/styleGuide/Typos';
import Button from '../../../../../Common/components/Button';
import Colors from '../../../../../Common/themes/Colors';

export const DetailedViewContainer = styled.div`
  padding-top: 120px;
`;

export const ImageTextContainer = styled.div`
  display: flex;
`;

export const ResourceIcon = styled.img``;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const ResourceName = styled(Typo32DarkBlueGreyHKGroteskRegular)`
  line-height: 1.25;
  letter-spacing: normal;
`;

export const ResourceLink = styled(Typo14BrightBlueHKGroteskRegular)`
  line-height: 1.71;
  letter-spacing: normal;
`;

export const ResourceDescription = styled(Typo14SteelHKGroteskRegular)`
  margin-bottom: 36px;
  width: 32%;
`;

export const UpdateButton = styled(Button)`
  color: ${Colors.white};
  padding: 9px 20px;
`;
