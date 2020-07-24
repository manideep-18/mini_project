import styled from 'styled-components';

import Colors from '../../themes/Colors';

export const CustomButton = styled.button`
  padding: 15px 20px;
  background-color: ${Colors.brightBlue};
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const ButtonText = styled.span`
  line-height: 1.71;
  letter-spacing: normal;
`;
