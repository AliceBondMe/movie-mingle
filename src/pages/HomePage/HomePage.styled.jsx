import styled from 'styled-components';

export const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 12px;
  color: #e4f8f1d3;
`;

export const Info = styled.p`
  width: 800px;
  text-align: center;
  margin: 0 auto 24px auto;
  color: #e4f8f1d3;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 0 auto 16px auto;
`;

export const Error = styled.p`
  font-size: 24px;
  margin: 24px 0;
`;

export const Hero = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
  background: center / cover no-repeat url(${({ $heroImage }) => $heroImage});
  margin-bottom: 24px;
  border: none;
  box-shadow: inset 0px 0px 5px 0px #e4f8f1d3, inset 0px 0px 20px 0px #e4f8f1d3;
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    background-image: linear-gradient(
      0deg,
      rgba(17, 17, 17, 0.163) 0%,
      rgba(17, 17, 17, 0.163) 100%
    );
  }
`;
