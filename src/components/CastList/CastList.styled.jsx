import styled from 'styled-components';

export const List = styled.ul`
  width: 844px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 36px;
  margin-bottom: 36px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
`;

export const PhotoWrap = styled.div`
  width: 140px;
  height: 170px;
  display: flex;
  align-content: center;
`;

export const Photo = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Info = styled.p`
  text-align: center;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: bold;
`;
