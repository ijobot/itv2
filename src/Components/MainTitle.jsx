import React from "react";
import styled from "styled-components";

const StyledMainTitle = styled.h1`
  grid-area: title;
  font-size: 3.5rem;
  letter-spacing: -2px;
  color: var(--generalColor);
  line-height: 1.1;
  background-color: var(--boxColor);
  border: var(--border);
  padding: 0.65rem 0.8rem 0.3rem;
  z-index: 2;
`;

const MainTitle = () => {
  const appTitle = "Battle Plan";
  return <StyledMainTitle>{appTitle}</StyledMainTitle>;
};

export default MainTitle;
