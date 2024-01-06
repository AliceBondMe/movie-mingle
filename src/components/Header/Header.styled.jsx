import { IoMenu } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 36px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: var(--basic-white);
  background: linear-gradient(
    to right,
    var(--additional) 0%,
    var(--accent) 50%,
    var(--additional) 100%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavBlock = styled.div`
  display: flex;
`;

export const ThemeButton = styled.button`
  border: none;
  background-color: inherit;
  color: inherit;
  cursor: pointer;
`;

export const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  color: var(--basic-white);
  border: none;
  cursor: pointer;
`;

export const MenuIcon = styled(IoMenu)`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = styled(IoMdClose)`
  width: 100%;
  height: 100%;
`;
