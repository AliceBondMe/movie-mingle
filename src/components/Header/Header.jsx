import Navigation from 'components/Navigation/Navigation';
import {
  CloseIcon,
  HeaderStyled,
  MenuButton,
  MenuIcon,
  NavBlock,
  ThemeButton,
} from './Header.styled';
import { Logo } from 'components/Logo/Logo';
import { ThemeContext } from 'components/App';
import { useContext, useEffect, useState } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [isMobileMenulOpen, setIsMobileMenulOpen] = useState(false);

  const handleResize = () => {
    window.innerWidth <= 640 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenulOpen) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenulOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenulOpen(false);
  };

  return (
    <HeaderStyled>
      <NavBlock>
        <Logo />
        {!isMobile && <Navigation />}
      </NavBlock>

      {!isMobile && (
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
      )}

      {isMobile &&
        (isMobileMenulOpen ? (
          <MenuButton
            type="button"
            aria-label="close menu"
            onClick={closeMobileMenu}
          >
            <CloseIcon />
          </MenuButton>
        ) : (
          <MenuButton
            type="button"
            aria-label="open menu"
            onClick={() => setIsMobileMenulOpen(true)}
          >
            <MenuIcon />
          </MenuButton>
        ))}

      {isMobileMenulOpen && <MobileMenu closeMobileMenu={closeMobileMenu} />}
    </HeaderStyled>
  );
};
