import { fadeIn } from 'GlobalStyle';

import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  animation: ${fadeIn} 700ms ease-in-out;
`;
