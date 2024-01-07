import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;

  @media screen and (max-width: 639px) {
    gap: 16px;
  }
`;

export const Info = styled.h3`
  width: 800px;
  text-align: center;

  @media screen and (max-width: 639px) {
    font-size: 16px;
    max-width: 100%;
  }
`;
