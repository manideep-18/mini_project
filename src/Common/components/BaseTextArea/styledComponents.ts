import styled from 'styled-components';

import Colors from '../../themes/Colors';

export const CustomTextArea = styled.textarea`
  border-radius: 2px;
  border: solid 1px ${Colors.steel};
  background-color: ${Colors.white};
  color: ${Colors.darkBlueGrey};
  outline: none;

  &:disabled {
    border: solid 1px ${Colors.lightBlueGrey};
    color: ${Colors.steel60};
  }
`;
