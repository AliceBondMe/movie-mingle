import styled from 'styled-components';

export const Button = styled.button`
  font-family: inherit;
  font-size: inherit;
  line-height: 32px;
  color: var(--basic-light);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all var(--basic-transition);
  background-color: ${({ $underline }) => ($underline ? '#26645f' : '#30877e')};

  &:hover {
    background-color: var(--basic-light);
    color: var(--accent);
    outline: 1px solid var(--accent);
  }
`;

export const ButtonsList = styled.ul`
  margin: 0 auto;
  display: flex;
  gap: 4px;
`;
