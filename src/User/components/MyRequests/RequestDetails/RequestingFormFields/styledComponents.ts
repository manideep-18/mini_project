import styled from 'styled-components';
import Button from '../../../../../Common/components/Button';
import Colors from '../../../../../Common/themes/Colors';

export const FieldsButtonsContainer = styled.div``;

export const AllFieldsMainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LeftSideFieldsContainer = styled.div``;

export const RightSideFieldsContainer = styled.div`
  margin-left: 100px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled(Button)`
  color: ${Colors.white};
  padding: 10px 20px;
`;
