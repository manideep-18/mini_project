import styled from 'styled-components';

import Button from '../../../Common/components/Button';
import Colors from '../../../Common/themes/Colors';

export const TextButtonsContainer = styled.div`
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h3``;

export const ButtonsContainer = styled.div``;

export const AdminButton = styled(Button)`
  color: ${Colors.white};
  padding: 10px 20px;
`;

export const UserButton = styled(Button)`
  color: ${Colors.white};
  padding: 10px 20px;
  margin-left: 25px;
`;
