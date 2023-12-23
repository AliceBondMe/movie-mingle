import Navigation from 'components/Navigation/Navigation';
import { HeaderStyled, NavBlock, ThemeButton } from './Header.styled';
import { Logo } from 'components/Logo/Logo';
import { ThemeContext } from 'components/App';
import { useContext } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <HeaderStyled>
      <NavBlock>
        <Logo />
        <Navigation />
      </NavBlock>
      <ThemeButton
        type="button"
        aria-label="switch theme"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? (
          <MdOutlineLightMode size="28" />
        ) : (
          <MdOutlineDarkMode size="28" />
        )}
      </ThemeButton>
    </HeaderStyled>
  );
};
