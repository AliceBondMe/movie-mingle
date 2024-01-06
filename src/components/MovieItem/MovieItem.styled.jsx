import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  position: relative;
`;

export const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  width: 224px;
`;

export const ImgWrap = styled.div`
  margin: 0 auto 8px auto;
  border-radius: 8px;
  width: 200px;
  height: 268px;
  display: flex;
  align-content: center;
  overflow: hidden;
  transition: all var(--basic-transition);
  &:hover {
    box-shadow: 0px 0px 16px 4px var(--basic-dark);
  }
`;

export const Image = styled.img`
  border-radius: 8px;
  width: 100%;
  object-fit: cover;
  transition: transform var(--basic-transition);
  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Rating = styled.div`
  position: absolute;
  top: 232px;
  left: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid var(--basic-white);
  background-color: ${({ $color }) => $color};
  color: var(--basic-white);
  box-shadow: rgba(193, 193, 193, 0.766) 0px 2px 4px 0px,
    rgba(225, 225, 225, 0.682) 0px 2px 16px 0px;
`;
