import Navigation from 'components/Navigation/Navigation';
import { HeaderStyled } from './Header.styled';
import { Logo } from 'components/Logo/Logo';

export const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Navigation />
    </HeaderStyled>
  );
};
