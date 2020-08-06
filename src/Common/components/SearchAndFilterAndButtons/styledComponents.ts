import styled from 'styled-components';
import Button from '../Button';
import Colors from '../../themes/Colors';

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const AcceptButton = styled(Button)`
  color: ${Colors.white};
  text-transform: uppercase;
  background-color: ${Colors.greenishTeal};
`;

export const RejectButton = styled(Button)`
  color: ${Colors.white};
  margin-left: 23px;
  text-transform: uppercase;
  background-color: ${Colors.neonRed};
`;
