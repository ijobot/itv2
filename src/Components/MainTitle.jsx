import React from "react";
import styled from "styled-components";

const StyledMainTitle = styled.h1`
  grid-column-start: 2;
  grid-row-start: 2;
  font-size: 4rem;
  letter-spacing: -2px;
  color: var(--borderColor);
  line-height: 0.9;
  background-color: var(--boxColor);
  border: var(--border);
  padding: 0.65rem 0.8rem;
`;

const MainTitle = () => {
  const appTitle = "Battle Plan";
  return <StyledMainTitle>{appTitle}</StyledMainTitle>;
};

export default MainTitle;
