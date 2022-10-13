import styled from "styled-components";
import { bgSection3Image } from "../data/images.js";
import * as color from "../data/colors.js";

export const Section3Styled = styled.section`
  background-color: ${color.section1};
  background-image: url(${bgSection3Image});
  background-repeat: no-repeat;
  background-position: 300px 0px;
  height: 1300px;
  overflow: hidden;
  @media (max-width: 1000px) {
    height: 1600px;
  }
  @media (max-width: 600px) {
    height: 2200px;
  }
  @media (max-width: 447px) {
    height: 2800px;
  }
`;

export const ConceptItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ConceptItemStyled = styled.div`
  max-width: 400px;
`;

export const CompanyItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 70px;
  margin: 120px 0;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin: 100px auto;
`;

export const RotateItem = styled.img.attrs((props) => ({
  style: {
    transform: `rotate(${props.angle}deg)`,
  },
}))`
  transition: all 0.5s ease-in-out;
  max-width: 220px;
  max-height: 220px;
  height: auto;
  width: auto;
  margin: 0 auto;
`;

export const LegendItem = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const CompanyItemStyled = styled.div`
  width: 180px;
`;

export const CompanyImage = styled.div`
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 0px 30px 80px -20px rgb(68 40 84 / 40%);
  background-image: url(${(props) => props.image});
  background-size: contain;
  width: 180px;
  height: 180px;
`;

export const ImageDescription = styled.div`
  font-weight: 600;
  font-size: 14px;
  text-align: center;
`;
