import styled, { css } from 'styled-components';

import Button from '../Button';

interface TabButtonProps {
  isActive: boolean;
}

export const CustomTabButton = styled(Button)<TabButtonProps>`
  padding: 5px 71px;
  background-color: ${(props) => (props.isActive ? '#0b69ff' : '#d7dfe9')};
  color: ${(props) => (props.isActive ? 'white' : 'black')};
`;

export const TextCss = css`
  font-family: HKGrotesk;
  font-size: 14px;
  font-weight: 600;
`;
