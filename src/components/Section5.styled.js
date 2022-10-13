import styled from "styled-components";
import * as color from "../data/colors.js";
import { facebookLogo, instagramLogo, linkedinLogo } from "../data/images";

export const SocialContainer = styled.div`
  padding: 20px 0;
  display: flex;
  height: 80px;
  justify-content: center;
  gap: 10px;
  background-color: ${color.section1};
`;

export const SocialNetwork = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  &:nth-child(1) {
    background: url(${facebookLogo}), ${color.font};
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center center;
  }
  &:nth-child(2) {
    background: url(${instagramLogo}), ${color.font};
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center center;
  }
  &:nth-child(3) {
    background: url(${linkedinLogo}), ${color.font};
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;
