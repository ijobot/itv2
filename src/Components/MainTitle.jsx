import React from "react";
import styled from "styled-components";

const StyledMainTitle = styled.h1`
  grid-column-start: 2;
  grid-row-start: 2;
  font-size: 3rem;
  font-weight: bold;
  color: #6a5d83;
  line-height: 1.2;
  background-color: #0c0122;
  border: 2px solid #6a5d83;
  padding: 0.5rem;
`;

const MainTitle = () => {
  const appTitle = "Battle Plan";
  return <StyledMainTitle>{appTitle}</StyledMainTitle>;
};

export default MainTitle;
