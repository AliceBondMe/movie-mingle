import styled from 'styled-components';
import { TbVideoMinus, TbVideoPlus } from 'react-icons/tb';

export const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: var(--accent);
  color: var(--basic-white);
  border: none;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
`;

export const RemoveButton = styled(Button)`
  background-color: var(--basic-gray);
`;

export const VideoPlus = styled(TbVideoPlus)`
  width: 100%;
  height: 100%;
`;

export const VideoMinus = styled(TbVideoMinus)`
  width: 100%;
  height: 100%;
`;
