import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
`;

export const Info = styled.h3`
  width: 800px;
  text-align: center;
`;

export const HomeLink = styled(Link)`
  text-decoration: underline;
`;
