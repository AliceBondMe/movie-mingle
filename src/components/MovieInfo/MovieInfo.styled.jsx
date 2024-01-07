import { fadeIn } from 'GlobalStyle';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 24px;
  animation: ${fadeIn} 700ms ease-in-out;

  @media screen and (max-width: 1279px) {
    padding: 12px;
    font-size: 14px;
    gap: 20px;
  }

  @media screen and (max-width: 639px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  text-shadow: 0px 6px 8px rgba(78, 78, 78, 0.8);

  @media screen and (max-width: 1279px) {
    max-width: 80%;
    margin-bottom: 8px;
  }

  @media screen and (max-width: 639px) {
    font-size: 24px;
    margin: 0 auto 12px auto;
    text-align: center;
  }
`;

export const Information = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 700px;

  @media screen and (max-width: 1279px) {
    max-width: 400px;
    margin-bottom: 24px;
  }

  @media screen and (max-width: 639px) {
    margin: 0 auto;
    width: 100%;
  }
`;

export const Paragraph = styled.p`
  display: grid;
  grid-template-columns: 175px 525px;
  gap: 8px;
  text-align: justify;

  @media screen and (max-width: 1279px) {
    grid-template-columns: 100%;
    padding: 0 4px;
  }
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

  @media screen and (max-width: 1279px) {
    height: 24px;
  }

  @media screen and (max-width: 639px) {
    margin-left: -4px;
    height: 32px;
  }
`;

export const Poster = styled.img`
  height: 600px;
  width: auto;
  border-radius: 8px;
  box-shadow: 0px 6px 8px rgba(78, 78, 78, 0.8);

  @media screen and (max-width: 1279px) {
    height: 480px;
  }

  @media screen and (max-width: 639px) {
    height: auto;
    width: 100%;
  }
`;

export const NoPoster = styled.p`
  margin: 0 auto;
`;
