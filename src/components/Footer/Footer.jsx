import { Logo } from 'components/Logo/Logo';
import { Anchor, DeveloperInfo, FooterStyled } from './Footer.styled';
import { TbMovie } from 'react-icons/tb';
import { SiLinkedin } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const Footer = () => {
  return (
    <FooterStyled>
      <Logo>
        <TbMovie />
        MovieMingle
      </Logo>
      <DeveloperInfo>
        <p>Developed by</p>
        <div>
          <Anchor
            href="https://www.linkedin.com/in/alisa-bondarenko/"
            target="blank"
          >
            Alice Bondarenko <SiLinkedin />
          </Anchor>

          <Anchor href="https://github.com/AliceBondMe" target="blank">
            GitHub <FaExternalLinkAlt />
          </Anchor>
        </div>
      </DeveloperInfo>
    </FooterStyled>
  );
};
