import styled from 'styled-components';
import BaseInput from '../BaseInput';
import Button from '../Button';
import Colors from '../../themes/Colors';

export const FieldsContainer = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserNameInputField = styled(BaseInput)``;

export const PasswordInputField = styled(BaseInput)`
  margin-top: 20px;
`;

export const LoginButton = styled(Button)`
  color: ${Colors.white};
  margin-top: 25px;
  padding: 10px 20px;
`;
