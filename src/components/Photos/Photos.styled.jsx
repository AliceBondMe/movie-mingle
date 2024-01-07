import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
`;

export const ImagesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  max-width: 1264px;
`;

export const ImagesItem = styled.li`
  width: 240px;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  transition: all var(--basic-transition);

  &:hover {
    scale: 1.08;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;
