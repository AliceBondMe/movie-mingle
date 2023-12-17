import styled from 'styled-components';

export const Item = styled.li`
  text-align: justify;
  padding: 16px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;

export const Author = styled.p`
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 16px 0 0 16px;
  gap: 4px;
  height: 32px;
  padding: 0 10% 0 4px;
  color: var(--basic-white);
  background: linear-gradient(
    to right,
    var(--accent) 70%,
    var(--basic-light) 100%
  );
  font-weight: bold;
`;

export const Url = styled.a`
  font-weight: bold;
  text-decoration: underline;
  &:hover {
    color: var(--accent);
  }
`;
