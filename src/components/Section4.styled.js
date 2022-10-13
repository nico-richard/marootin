import styled from "styled-components";
import { bgSection4Image } from "../data/images.js";
import * as color from "../data/colors.js";

export const Section4Styled = styled.section`
  background-image: url(${bgSection4Image});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  height: 700px;
  padding: 20px;
  position: relative;
  @media (max-width: 600px) {
    height: 800px;
  }
  @media (max-width: 400px) {
    height: 900px;
  }
`;

export const FormContainerStyled = styled.div`
  background-color: ${color.font};
  max-width: 450px;
  width: 80%;
  margin: 50px auto;
  padding: 20px;
`;

export const FormTitle = styled.div`
  font-size: 21px;
  font-weight: 600;
  text-align: center;
  margin: 20px 0;
`;

export const Paragraph = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: white;
  margin: 20px 0;
  line-height: 23px;
`;

export const FieldSetStyled = styled.fieldset`
  border: none;
  margin: 0 0 20px;
  border-radius: 5px;
  padding: 0;
  width: 100%;
  &:nth-child(-n + 2) {
    background-color: white;
  }
`;

export const TextInput = styled.input`
  background-color: transparent;
  box-sizing: border-box;
  border: none;
  width: 100%;
  font-size: 16px;
  padding: 15px;
  margin: 0;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const SubmitButton = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  background-color: ${color.section1};
  color: ${color.font};
  font-size: 17px;
  font-weight: 400;
`;

export const FollowUs = styled.div`
  position: absolute;
  bottom: 25px;
  font-size: 20px;
  font-weight: 800;
  color: ${color.font};
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 70%;
`;
