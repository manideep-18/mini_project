import styled from 'styled-components';

import Button from '../../../../Common/components/Button';
import Colors from '../../../../Common/themes/Colors';

export const DetailsContentContainer = styled.div`
  padding-top: 100px;
`;

export const ButtonsContainer = styled.div`
  margin-top: 24px;
`;

export const AddButton = styled(Button)`
  color: ${Colors.white};
  background-color: ${(props) =>
    props.disabled ? `${Colors.lightBlueGrey}` : `${Colors.greenishTeal}`};
  padding: 9px 20px;
`;

export const DeleteButton = styled(Button)`
  margin-left: 24px;
  color: ${Colors.white};
  background-color: ${(props) =>
    props.disabled ? `${Colors.lightBlueGrey}` : `${Colors.neonRed}`};
  padding: 9px 20px;
`;
