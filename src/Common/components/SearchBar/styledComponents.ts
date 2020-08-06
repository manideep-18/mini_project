import styled from 'styled-components';

import Colors from '../../themes/Colors';

export const CustomSearchBar = styled.input`
  width: 648px;
  height: 40px;
  border-radius: 3px;
  border: solid 1px ${Colors.lightBlueGrey};
  background-color: ${Colors.white};
  background-image: url('https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/3a155aa8-1c9a-4c81-99c7-c2f37dd6176b.svg');
  background-repeat: no-repeat;
  background-position: 18px 15px;
  padding-left: 35px;
  outline: none;
`;
