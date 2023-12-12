import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  color: #113835;
`;

export const CardLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  width: 224px;
`;

export const ImgWrap = styled.div`
  margin: 0 auto;
  border-radius: 8px;
  width: 200px;
  height: 268px;
  display: flex;
  align-content: center;
  overflow: hidden;
  transition: all 300ms ease-in-out;
  &:hover {
    box-shadow: 0px 0px 10px 4px #113835;
  }
`;

export const Image = styled.img`
  border-radius: 8px;
  width: 100%;
  object-fit: cover;
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Rating = styled.div`
  position: absolute;
  top: 16px;
  right: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  background-color: ${({ $color }) => $color};
  color: #ffffff;
  box-shadow: rgba(193, 193, 193, 0.766) 0px 2px 4px 0px,
    rgba(225, 225, 225, 0.682) 0px 2px 16px 0px;
`;
