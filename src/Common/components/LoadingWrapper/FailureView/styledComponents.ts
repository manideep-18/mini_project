import styled from 'styled-components';

import Button from '../../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FailureText = styled.span``;

export const RetryButton = styled(Button)`
  min-width: 100px;
  margin-top: 5px;
`;
