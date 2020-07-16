import styled from 'styled-components';
import { Typo32DarkBlueGreyHKGroteskRegular } from '../../../../../Common/styleGuide/Typos';
import Button from '../../../../../Common/components/Button';
import Colors from '../../../../../Common/themes/Colors';

export const FieldsContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AddResourceText = styled(Typo32DarkBlueGreyHKGroteskRegular)``;

export const CreateButton = styled(Button)`
  margin-top: 80px;
  padding: 10px 20px;
  color: ${Colors.white};
`;
