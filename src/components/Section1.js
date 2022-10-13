import { useState } from "react";
import { titleImage, sloganImage, menuImage } from "../data/images.js";
import {
  Section1Styled,
  WebsiteTitle,
  HeaderContainer,
  Slogan,
  MenuTrigger,
  MenuItem,
  DropDownMenuStyled,
} from "./Section1.styled.js";
import { ButtonStyled } from "./common.styled.js";

export default function Section1() {
  const [isShown, setIsShown] = useState(false);
  const handleMenuClick = () => {
    setIsShown((state) => !state);
  };
  const handleBgClick = (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName !== "A") {
      return isShown ? setIsShown(false) : {};
    }
  };

  return (
    <Section1Styled onClick={handleBgClick}>
      <WebsiteTitle src={titleImage} alt="website title" />
      <MenuTrigger src={menuImage} alt="menu" onClick={handleMenuClick} />
      {isShown && <DropDownMenu />}
      <HeaderContainer>
        <p>[ma·routine] visage en stick rechargeable.</p>
        <Slogan src={sloganImage} alt="company slogan" />
        <ButtonStyled> Tester nos produits </ButtonStyled>
      </HeaderContainer>
    </Section1Styled>
  );
}

function DropDownMenu() {
  return (
    <DropDownMenuStyled>
      <MenuItem href={"#Home"}>Accueil</MenuItem>
      <MenuItem href={"#Values"}>Nos valeurs</MenuItem>
      <MenuItem href={"#Products"}>Produits</MenuItem>
      <MenuItem href={"#Contact"}>Contact</MenuItem>
    </DropDownMenuStyled>
  );
}
