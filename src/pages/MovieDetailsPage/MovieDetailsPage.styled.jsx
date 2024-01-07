import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;

  @media screen and (max-width: 639px) {
    padding: 12px;
    font-size: 16px;
  }
`;

export const AdditionalNav = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 32px;
  background: linear-gradient(
    to right,
    var(--basic-light) 0%,
    var(--accent) 20%,
    var(--accent) 80%,
    var(--basic-light) 100%
  );
  align-items: bottom;
  font-size: 20px;
  font-weight: bold;

  @media screen and (max-width: 639px) {
    font-size: 16px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: var(--basic-white);
  cursor: pointer;

  &.active {
    text-decoration: underline;
  }
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 16px 0 0 16px;
  height: 32px;
  padding: 0 10% 0 4px;
  color: var(--basic-white);
  background: linear-gradient(
    to right,
    var(--accent) 70%,
    var(--basic-light) 100%
  );
  font-weight: bold;
  transition: all var(--basic-transition);

  &:hover {
    transform: translateX(-10px);
    background: linear-gradient(
      to right,
      var(--additional) 70%,
      var(--basic-light) 100%
    );
  }
`;
