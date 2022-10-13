import styled from "styled-components";
import * as color from "../data/colors.js";
import { bgSection1Image } from "../data/images.js";

export const Section1Styled = styled.section`
  background-color: ${color.section1};
  height: 900px;
  background-image: url(${bgSection1Image});
  background-repeat: no-repeat;
  background-size: 800px;
  background-position: calc(100% - 30px) calc(100% - 130px);
  position: relative;
  @media (min-width: 600px) and (max-width: 1000px) {
    background-size: 600px;
    background-position: center 220px;
  }
  @media (max-width: 600px) {
    background-size: 400px;
    background-position: center 200px;
    height: 800px;
  }
  @media (max-width: 400px) {
    background-size: 100%;
  }
`;

export const WebsiteTitle = styled.img`
  position: absolute;
  width: 500px;
  top: 80px;
  left: 150px;
  @media (min-width: 600px) and (max-width: 1000px) {
    width: 400px;
    left: 100px;
  }
  @media (max-width: 600px) {
    width: 300px;
    left: 50px;
  }
  @media (max-width: 400px) {
    width: 90%;
    left: 10px;
  }
`;

export const HeaderContainer = styled.div`
  position: absolute;
  top: 250px;
  left: 150px;
  display: flex;
  flex-direction: column;
  width: 350px;
  @media (min-width: 1000px) and (max-width: 1200px) {
    left: 50px;
  }
  @media (min-width: 600px) and (max-width: 1000px) {
    top: 600px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 600px) {
    top: 500px;
    left: 50%;
    transform: translateX(-50%);
    width: 250px;
  }
`;

export const Slogan = styled.img`
  margin: 10px 0;
`;
