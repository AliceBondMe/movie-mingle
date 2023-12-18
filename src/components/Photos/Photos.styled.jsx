import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
`;

export const ImagesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 240px);
  gap: 12px;
`;

export const ImagesItem = styled.li`
  cursor: pointer;
  transition: all var(--basic-transition);

  &:hover {
    scale: 1.02;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;
