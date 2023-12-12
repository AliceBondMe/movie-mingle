import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  width: 120px;
  font-family: inherit;
  font-size: inherit;
  line-height: 32px;
  color: #e4f8f1d3;
  background-color: #30877e;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: #e4f8f1d3;
    color: #30877e;
    outline: 1px solid #30877e;
  }
`;
