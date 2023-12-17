import styled from 'styled-components';

export const PageTitle = styled.h1`
  text-align: center;
  color: var(--basic-white);
  font-size: 60px;
  line-height: 80px;
  text-shadow: 0px 11px 10px #082925b2;
`;

export const Info = styled.p`
  text-align: center;
  font-size: 24px;
  color: var(--basic-white);
  text-shadow: 3px 0px 7px rgba(85, 85, 85, 0.8),
    -3px 0px 7px rgba(85, 85, 85, 0.8), 0px 4px 7px rgba(85, 85, 85, 0.8);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  margin: 0 auto 16px auto;
`;

export const Error = styled.p`
  font-size: 24px;
  margin: 24px 0;
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
`;
