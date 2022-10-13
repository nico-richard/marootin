import { titleImage, sloganImage } from "../data/images.js";
import {
  Section1Styled,
  WebsiteTitle,
  HeaderContainer,
  Slogan,
} from "./Section1.styled.js";
import { ButtonStyled } from "./common.styled.js";

export default function Section1() {
  return (
    <Section1Styled>
      <WebsiteTitle src={titleImage} alt="website title" />
      <HeaderContainer>
        <p>[ma·routine] visage en stick rechargeable.</p>
        <Slogan src={sloganImage} alt="company slogan" />
        <ButtonStyled> Tester nos produits </ButtonStyled>
      </HeaderContainer>
    </Section1Styled>
  );
}
