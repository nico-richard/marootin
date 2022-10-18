import { StyledNavbar, StyledLink, WebsiteTitle } from "./Navbar.styled";
import { titleImage } from "../data/images.js";

export default function Navbar() {
  return (
    <StyledNavbar>
      <WebsiteTitle src={titleImage} alt="website title" />
      <StyledLink href="#home">Home</StyledLink>
      <StyledLink href="#products">Product</StyledLink>
      <StyledLink href="#about">About Us</StyledLink>
      <StyledLink href="#contact" primary>
        Contact
      </StyledLink>
    </StyledNavbar>
  );
}
