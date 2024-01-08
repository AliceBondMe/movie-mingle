import styled from 'styled-components';

export const PageTitle = styled.h1`
  max-width: 85%;
  text-align: center;
  color: var(--basic-white);
  font-size: 60px;
  line-height: 1.33;
  text-shadow: 0px 11px 10px #082925b2;

  @media screen and (max-width: 1279px) {
    font-size: 44px;
  }

  @media screen and (max-width: 639px) {
    font-size: 32px;
  }
`;

export const Info = styled.p`
  text-align: center;
  font-size: 24px;
  color: var(--basic-white);
  text-shadow: 3px 0px 7px rgba(85, 85, 85, 0.8),
    -3px 0px 7px rgba(85, 85, 85, 0.8), 0px 4px 7px rgba(85, 85, 85, 0.8);

  @media screen and (max-width: 1279px) {
    font-size: 20px;
  }

  @media screen and (max-width: 639px) {
    font-size: 16px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  margin: 0 auto 16px auto;

  @media screen and (max-width: 1279px) {
    font-size: 28px;
  }

  @media screen and (max-width: 639px) {
    font-size: 24px;
  }
`;

export const Error = styled.p`
  font-size: 20px;
  margin: 24px 0;

  @media screen and (max-width: 639px) {
    font-size: 16px;
  }
`;

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 52px;
  width: 100%;
  height: 480px;
  background: linear-gradient(to top, #082925b2 40%, #0c403b79 100%),
    center / cover no-repeat url(${({ $heroImage }) => $heroImage});
  margin-bottom: 24px;
  border: none;

  @media screen and (max-width: 639px) {
    gap: 32px;
  }
`;
