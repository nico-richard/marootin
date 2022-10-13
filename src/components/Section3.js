import { useState, useEffect } from "react";
import {
  companyItem1,
  companyItem2,
  companyItem3,
  companyItem4,
  conceptItem1,
  conceptItem2,
  conceptItem3,
} from "../data/data.js";

import {
  Section3Styled,
  ConceptItemContainer,
  CompanyItemContainer,
  ButtonContainer,
  RotateItem,
  LegendItem,
  CompanyImage,
  CompanyItemStyled,
  ImageDescription,
  ConceptItemStyled,
} from "./Section3.styled.js";
import { SectionTitle, ButtonStyled } from "./common.styled.js";

export default function Section3() {
  return (
    <Section3Styled>
      <SectionTitle>Le concept</SectionTitle>
      <ConceptItemContainer>
        <ConceptItem item={conceptItem1} />
        <ConceptItem item={conceptItem2} />
        <ConceptItem item={conceptItem3} />
      </ConceptItemContainer>
      <ButtonContainer>
        <ButtonStyled> Tester nos produits </ButtonStyled>
      </ButtonContainer>
      <SectionTitle>Maroot’in c’est :</SectionTitle>
      <CompanyItemContainer>
        <CompanyItem item={companyItem1} />
        <CompanyItem item={companyItem2} />
        <CompanyItem item={companyItem3} />
        <CompanyItem item={companyItem4} />
      </CompanyItemContainer>
    </Section3Styled>
  );
}

function ConceptItem({ item }) {
  const [angle, setAngle] = useState(0);

  function setTheAngle() {
    setAngle(window.scrollY / 2);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", setTheAngle);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", setTheAngle);
    };
  });

  return (
    <ConceptItemStyled>
      <RotateItem src={item.image} angle={Math.floor(angle)} />
      <LegendItem>{item.text}</LegendItem>
    </ConceptItemStyled>
  );
}

function CompanyItem({ item }) {
  return (
    <CompanyItemStyled>
      <CompanyImage image={item.image}></CompanyImage>
      <ImageDescription>{item.text}</ImageDescription>
    </CompanyItemStyled>
  );
}
