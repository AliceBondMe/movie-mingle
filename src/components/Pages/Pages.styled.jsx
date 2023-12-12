import styled from 'styled-components';

export const Button = styled.button`
  font-family: inherit;
  font-size: inherit;
  line-height: 32px;
  color: #e4f8f1d3;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  background-color: ${({ $underline }) => ($underline ? '#26645f' : '#30877e')};

  &:hover {
    background-color: #e4f8f1d3;
    color: #30877e;
    outline: 1px solid #30877e;
  }
`;

export const ButtonsList = styled.ul`
  margin: 0 auto;
  display: flex;
  gap: 4px;
`;
