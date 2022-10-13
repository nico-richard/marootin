import styled from "styled-components";
import * as color from "../data/colors.js";

export const Section2Styled = styled.section`
  height: 800px;
  overflow: auto;
  @media (max-width: 1000px) {
    height: 1300px;
  }
  @media (max-width: 900px) {
    height: 1600px;
  }
  @media (max-width: 600px) {
    height: 1700px;
  }
`;

export const BlockContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px 50px;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const BlockStyled = styled.div`
  padding: 20px 29px 29px 15px;
  margin: 20px;
  border-radius: 100px 100px 2px 2px;
  min-width: 250px;
  max-width: 300px;
  @keyframes borderWave {
    from {
      border-radius: 100px 100px 2px 2px;
    }
    25% {
      border-radius: 2px 100px 100px 2px;
    }
    50% {
      border-radius: 2px 2px 100px 100px;
    }
    75% {
      border-radius: 100px 2px 2px 100px;
    }
    to {
      border-radius: 100px 100px 2px 2px;
    }
  }
  &:hover {
    animation: borderWave 0.5s linear;
  }
  @media (max-width: 1000px) {
    max-width: 60%;
  }
  &:nth-child(1) {
    background-color: ${color.block1};
  }
  &:nth-child(2) {
    background-color: ${color.block2};
  }
  &:nth-child(3) {
    background-color: ${color.block3};
  }
`;

export const BlockTitle = styled.div`
  text-align: center;
  color: ${color.font};
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 30px;
`;

export const BlockIntro = styled.div`
  text-align: justify;
  font-size: 12.5px;
  font-weight: 400;
  line-height: 20px;
`;

export const ListStyled = styled.ul`
  font-size: 12.5px;
  margin: 0;
  padding: 0;
`;

export const ListElement = styled.div`
  margin: 20px 0px;
`;

export const BoltIcon = styled.span`
  margin-right: 5px;
`;

export const ListText = styled.p`
  display: inline;
  font-style: italic;
  font-weight: 400;
`;
