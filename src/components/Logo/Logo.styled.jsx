import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 28px;
  font-weight: bold;

  &:hover {
    animation: floating 0.3s ease-out infinite alternate;
  }

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY(-4px);
    }
  }
`;
