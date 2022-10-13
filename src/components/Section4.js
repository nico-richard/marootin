import { formContent } from "../data/data.js";
import {
  Section4Styled,
  FormContainerStyled,
  FormTitle,
  Paragraph,
  FieldSetStyled,
  TextInput,
  SubmitButton,
  FollowUs,
} from "./Section4.styled.js";

export default function Section4() {
  return (
    <Section4Styled id="section4">
      <FormContainer content={formContent} />
    </Section4Styled>
  );
}

function FormContainer({ content }) {
  return (
    <FormContainerStyled>
      <FormTitle>{content.title}</FormTitle>
      <Paragraph>
        <b>{content.paragraph1.header}</b>
        {content.paragraph1.text}
      </Paragraph>
      <Paragraph>
        <b>{content.paragraph2.header}</b>
        {content.paragraph2.text}
      </Paragraph>
      <form>
        <FieldSetStyled>
          <TextInput type="text" placeholder="Nom" />
        </FieldSetStyled>
        <FieldSetStyled>
          <TextInput type="text" placeholder="E-mail" />
        </FieldSetStyled>
        <FieldSetStyled>
          <SubmitButton type="submit" value="VALIDER" />
        </FieldSetStyled>
      </form>
      <Paragraph>{content.terms}</Paragraph>
      <FollowUs>Suivez nos aventures sur les réseaux sociaux</FollowUs>
    </FormContainerStyled>
  );
}
