import { fadeIn } from 'GlobalStyle';

import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 auto;
  max-width: 1248px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  animation: ${fadeIn} 700ms ease-in-out;
`;
