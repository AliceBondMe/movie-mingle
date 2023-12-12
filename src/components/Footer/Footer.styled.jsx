import styled from 'styled-components';

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  min-height: 36px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #30877e;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Anchor = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    text-decoration: underline;
  }
`;

export const DeveloperInfo = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
`;
