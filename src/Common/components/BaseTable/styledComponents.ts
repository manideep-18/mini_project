import styled from 'styled-components';
import { Typo12SteelHKGroteskSemiBold } from '../../styleGuide/Typos';

export const CustomTable = styled.table`
  border: solid 1px #d7dfe9;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  margin: auto;
  margin-top: 24px;
  width: 91%;
`;

export const CustomColumn = styled.td`
  border-bottom: 1px solid #ddd;
  text-transform: none;
  padding: 10px;
`;

export const CustomRow = styled(Typo12SteelHKGroteskSemiBold)`
  text-transform: uppercase;

  &:nth-last-child(1) {
    ${CustomColumn} {
      border-bottom: none;
    }
  }
`;

export const CustomHeader = styled.th`
  /* padding-left: 130px; */
  border-bottom: 1px solid #ddd;
  padding: 10px;
  text-align: left;
`;
