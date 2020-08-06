import styled from 'styled-components';

import { Typo14SteelHKGroteskRegular } from '../../styleGuide/Typos';

export const ImageSelectContainer = styled.div`
  display: flex;
`;

export const SortIcon = styled.img``;

export const CustomSelect = styled.select`
  outline: none;
  border: none;
  background: none;

  select::-ms-expand {
    display: none;
  }
`;

export const CustomOption = styled(Typo14SteelHKGroteskRegular)``;
