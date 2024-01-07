import { Wrap } from './Logo.styled';
import { TbMovie } from 'react-icons/tb';

export const Logo = ({ closeMobileMenu }) => {
  return (
    <Wrap to="/" onClick={closeMobileMenu}>
      <TbMovie />
      MovieMingle
    </Wrap>
  );
};
