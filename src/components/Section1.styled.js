import styled from "styled-components";
import * as color from "../data/colors.js";
import { bgSection1Image } from "../data/images.js";

export const Section1Styled = styled.section`
  overflow: hidden;
  background-color: ${color.section1};
  height: 900px;
  background-image: url(${bgSection1Image});
  background-repeat: no-repeat;
  background-size: 800px;
  background-position: calc(100% - 30px) calc(100% - 200px);
  position: relative;
  /* z-index: -1; */
  @keyframes zoomInAndOut {
    from {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    to {
      transform: scale(1);
    }
  }
  &:hover {
    /* animation: zoomInAndOut 0.3s; */
  }
  @media (min-width: 600px) and (max-width: 1000px) {
    background-size: 600px;
    background-position: center 150px;
  }
  @media (max-width: 600px) {
    background-size: 400px;
    background-position: center 100px;
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
  @media (min-width: 500px) and (max-width: 599px) {
    width: 300px;
    left: 50px;
  }
  @media (max-width: 499px) {
    width: 90%;
    top: 20px;
    left: 20px;
  }
`;

export const MenuTrigger = styled.img`
  position: absolute;
  width: 50px;
  top: 100px;
  right: 50px;
  &:hover {
    filter: drop-shadow(5px 5px 5px);
  }
  z-index: 10;
  @media screen and (min-width: 500px) and (max-width: 599px) {
    width: 40px;
    right: 40px;
  }
  @media screen and (max-width: 499px) {
    width: 30px;
    right: 30px;
  }
`;

export const DropDownMenuStyled = styled.div`
  position: absolute;
  top: 160px;
  right: 40px;
  min-width: 250px;
  background-color: ${color.section1};
  opacity: 0.9;
  box-shadow: 5px 3px 15px;
  z-index: 9;
  border-radius: 10px;
  transition: all 0.5s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.a`
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  color: ${color.font};
  text-decoration: none;
  &:hover {
    background-color: ${color.font};
    color: ${color.section1};
  }
`;

export const HeaderContainer = styled.a`
  position: absolute;
  top: 200px;
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
