import { contentBlock1, contentBlock2, contentBlock3 } from "../data/data.js";
import {
  Section2Styled,
  BlockContainer,
  BlockStyled,
  BlockTitle,
  BlockIntro,
  ListStyled,
  ListElement,
  BoltIcon,
  ListText,
} from "./Section2.styled.js";
import { SectionTitle } from "./common.styled.js";

export default function Section2() {
  const blocks = [contentBlock1, contentBlock2, contentBlock3];
  const blockContent = blocks.map((block, index) => {
    return <Block key={index} content={block} />;
  });
  return (
    <Section2Styled>
      <SectionTitle>[ma·routine] visage essentielle</SectionTitle>
      <BlockContainer>{blockContent}</BlockContainer>
    </Section2Styled>
  );
}

function Block({ content }) {
  return (
    <BlockStyled>
      <BlockTitle>{content.title}</BlockTitle>
      <BlockIntro>{content.intro}</BlockIntro>
      <List content={content.list} />
    </BlockStyled>
  );
}

function List({ content }) {
  let renderedList = content.map((element, index) => {
    return (
      <ListElement key={index}>
        <BoltIcon>{"⚡️"}</BoltIcon>
        <ListText>{element}</ListText>
      </ListElement>
    );
  });
  return <ListStyled>{renderedList}</ListStyled>;
}
