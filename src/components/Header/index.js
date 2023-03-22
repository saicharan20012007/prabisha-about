import { useState } from "react";
import {
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  PhoneIcon,
  MailIcon,
  ContactInfo1,
  ContactInfo2,
  Text,
  MobileSectionNavbar,
  Section2logo,
  NavItem,
  Section2NavItems,
  DesktopNavContainer,
  Menu,
  Sidebar,
  NavContainer,
  HeaderContainer,
  AboutDescription,
  IconSection,
  CloseButton,
  Logo,
  LogoDesktop,
  AboutSection,
  AboutTitle,
  ContactContainer,
} from "./headerStyledComponents";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <IconSection>
          <LinkedinIcon />
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YoutubeIcon />
        </IconSection>
        <ContactContainer>
          <ContactInfo1>
            <PhoneIcon />
            <Text>+44(0)7867090363</Text>
          </ContactInfo1>
          <ContactInfo2>
            <MailIcon />
            <Text>care@prabisha.co.uk</Text>
          </ContactInfo2>
        </ContactContainer>
      </HeaderContainer>
      <NavContainer>
        <MobileSectionNavbar>
          <Section2logo href="prabisha.co.uk">
            <Logo
              src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/PC-Logo-NEW-for-Website-Page-PNG-1-300x140.png"
              alt="logo"
            />
          </Section2logo>
          <Menu onClick={toggleMenu} />
          <Sidebar style={{ width: isOpen ? "250px" : "0" }}>
            <CloseButton onClick={closeMenu}>×</CloseButton>

            <NavItem>HOME</NavItem>
            <NavItem>SERVICES</NavItem>
            <NavItem>PORTFOLIO</NavItem>
            <NavItem>CASE STUDIES</NavItem>
            <NavItem>BLOG</NavItem>
            <NavItem>ABOUT</NavItem>
            <NavItem>CONTACT</NavItem>
          </Sidebar>
        </MobileSectionNavbar>
        <DesktopNavContainer>
          <Section2logo href="prabisha.co.uk">
            <LogoDesktop
              src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/PC-Logo-NEW-for-Website-Page-PNG-1-300x140.png"
              alt="logo"
            />
          </Section2logo>
          <Section2NavItems>
            <NavItem>HOME</NavItem>
            <NavItem>SERVICES</NavItem>
            <NavItem>PORTFOLIO</NavItem>
            <NavItem>CASE STUDIES</NavItem>
            <NavItem>BLOG</NavItem>
            <NavItem>ABOUT</NavItem>
            <NavItem>CONTACT</NavItem>
          </Section2NavItems>
        </DesktopNavContainer>
        <AboutSection>
          <AboutTitle>ABOUT US</AboutTitle>
          <AboutDescription>
            Nobody can be left behind with our loyalty marketing solutions
          </AboutDescription>
        </AboutSection>
      </NavContainer>
    </>
  );
};

export default Header;
