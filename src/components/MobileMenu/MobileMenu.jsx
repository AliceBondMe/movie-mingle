import Navigation from 'components/Navigation/Navigation';
import { MenuContainer } from './MobileMenu.styled';
import { useContext } from 'react';
import { ThemeButton } from 'components/Header/Header.styled';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { createPortal } from 'react-dom';
import { ThemeContext } from 'components/App';

const modalRoot = document.querySelector('#modal-root');

export const MobileMenu = ({ closeMobileMenu }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return createPortal(
    <MenuContainer>
      <Navigation closeMobileMenu={closeMobileMenu} />
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
    </MenuContainer>,
    modalRoot
  );
};
