import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Typo12SteelHKGroteskRegular } from '../../styleGuide/Typos';

export const IconTextContainer = styled.div`
  position: absolute;
  top: 90px;
  left: 75px;
  display: flex;
`;

export const BackLink = styled(Link)``;

export const IconImage = styled.img`
  object-fit: contain;
`;

export const BackText = styled(Typo12SteelHKGroteskRegular)``;
