import { fadeIn } from 'GlobalStyle';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 24px;
  animation: ${fadeIn} 700ms ease-in-out;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  text-shadow: 0px 6px 8px rgba(78, 78, 78, 0.8);
`;

export const Information = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 700px;
`;

export const Paragraph = styled.p`
  display: grid;
  grid-template-columns: 175px 525px;
  gap: 8px;
  text-align: justify;
`;

export const LineHeader = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
  border-radius: 16px 0 0 16px;
  height: 32px;
  width: 120px;
  padding: 0 35px 0 20px;
  color: var(--basic-white);
  background: linear-gradient(
    to right,
    var(--accent) 80%,
    var(--basic-light) 100%
  );
  font-weight: bold;
`;

export const Poster = styled.img`
  height: 600px;
  width: auto;
  border-radius: 8px;
  box-shadow: 0px 6px 8px rgba(78, 78, 78, 0.8);
`;
