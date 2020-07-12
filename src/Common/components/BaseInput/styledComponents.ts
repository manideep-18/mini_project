import styled from 'styled-components';

import Colors from '../../themes/Colors';

export const Input = styled.input`
  width: 320px;
  height: 40px;
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
