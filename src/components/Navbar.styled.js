import styled from "styled-components";
import * as color from "../data/colors.js";

export const StyledNavbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background: ${color.section1};
  box-shadow: 0 1px 10px #333;
  padding: 10px 20px;
  object-fit: cover;
  /* @media screen and (max-width: 900px) {
    flex-direction: column;
  } */
`;

export const StyledLink = styled.a`
  vertical-align: middle;
  border-radius: 5px;
  text-decoration: none;
  padding: 5px 10px;
  color: ${color.font};
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  &:hover {
    background-color: ${color.font};
    color: ${color.section1};
    transition: all 0.5s;
  }
`;

export const WebsiteTitle = styled.img`
  max-width: min(400px, 80vw);
  margin-bottom: 20px;
`;
