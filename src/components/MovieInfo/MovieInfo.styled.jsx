import { fadeIn } from 'GlobalStyle';
import { TbVideoMinus, TbVideoPlus } from 'react-icons/tb';
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

export const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: var(--accent);
  color: var(--basic-white);
  border: none;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
`;

export const VideoPlus = styled(TbVideoPlus)`
  width: 100%;
  height: 100%;
`;

export const VideoMinus = styled(TbVideoMinus)`
  width: 100%;
  height: 100%;
`;
