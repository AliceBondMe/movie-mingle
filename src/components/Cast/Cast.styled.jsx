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
  padding: 4px;
  color: var(--basic-white);
  background-color: var(--accent);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: transparent;
    color: inherit;
    outline: 1px solid var(--accent);
  }

  @media screen and (max-width: 639px) {
    font-size: 14px;
  }
`;
