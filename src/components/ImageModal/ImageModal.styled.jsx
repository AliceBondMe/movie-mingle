import { IoMdClose } from 'react-icons/io';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  max-width: 1200px;
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const Backdrop = styled.div`
  z-index: 1200;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 8px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  color: var(--basic-white);
  border: none;
  cursor: pointer;

  @media screen and (max-width: 639px) {
    width: 28px;
    height: 28px;
  }
`;

export const CloseIcon = styled(IoMdClose)`
  width: 100%;
  height: 100%;
`;
