import styled from 'styled-components';

import Colors from '../../themes/Colors';

export const MainContainer = styled.div`
  position: fixed;
  background-color: ${Colors.white};
  width: 100%;
  z-index: 1;
  box-shadow: rgba(31, 45, 61, 0.15) 0px 1px 2px 0px;
`;

export const HeaderResponsiveContainer = styled.div`
  padding: 10px;
  width: 95%;
  margin: auto;
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IbhubsLogo = styled.img`
  object-fit: contain;
`;

export const ProfileImage = styled.img`
  object-fit: contain;
  width: 50px;
  height: 50px;
`;
