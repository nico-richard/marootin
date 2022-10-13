import styled from "styled-components";
import * as color from "../data/colors.js";

export const SectionTitle = styled.h1`
  font-size: 33px;
  font-weight: 700;
  color: ${color.font};
  margin: 80px 0;
  text-align: center;
`;

export const ButtonStyled = styled.button`
  background-color: ${color.font};
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  padding: 15px;
  border: 1px solid transparent;
  transition: all 0.5s;
  text-align: center;
  text-decoration: none;
  width: fit-content;
  margin-top: 30px;
  &:hover {
    background-color: white;
    border: 1px solid ${color.font};
    color: ${color.font};
  }
`;
