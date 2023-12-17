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
  margin-bottom: 4px;
  width: 140px;
  height: 140px;
  display: flex;
  align-content: center;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--accent);
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
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
