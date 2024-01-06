import { LinkStyled, Nav } from './Navigation.styled';

const Navigation = ({ closeMobileMenu }) => {
  return (
    <Nav>
      <LinkStyled to="/" onClick={closeMobileMenu}>
        Home
      </LinkStyled>
      <LinkStyled to="movies" onClick={closeMobileMenu}>
        Movies
      </LinkStyled>
      <LinkStyled to="watchlist" onClick={closeMobileMenu}>
        Watchlist
      </LinkStyled>
    </Nav>
  );
};

export default Navigation;
