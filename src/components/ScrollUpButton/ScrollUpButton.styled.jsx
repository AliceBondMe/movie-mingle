import { IoArrowUpCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';

export const ScrollUpBtn = styled.button`
  position: fixed;
  right: 40px;
  bottom: 64px;
  z-index: 1200;
  width: 48px;
  height: 48px;
  padding: 0;
  background-color: transparent;
  border: none;
  color: var(--basic-white);
  cursor: pointer;
  transition: all var(--basic-transition);

  &:hover {
    width: 56px;
    height: 56px;
    animation: dance 600ms ease-out infinite alternate;
  }

  @keyframes dance {
    0% {
      transform: rotate(-20deg);
    }
    50% {
      transform: translateY(-4px);
    }
    100% {
      transform: rotate(20deg);
    }
  }
`;

export const ArrowUp = styled(IoArrowUpCircleOutline)`
  background-color: var(--accent);
  border-radius: 50%;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 16px 4px var(--basic-dark);
`;
