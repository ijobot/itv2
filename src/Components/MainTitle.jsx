import React from "react";
import styled from "styled-components";

const StyledMainTitle = styled.div`
  grid-area: title;
  color: var(--generalColor);
  line-height: 0.8;
  background-color: var(--boxColor);
  border: var(--border);
  padding: 0.6rem 0rem 0.4rem;
  z-index: 2;
  height: auto;
  width: auto;
`;

const MainTitle = () => {
  const appTitle = "Battle Plan";
  return (
    <StyledMainTitle>
      <h1>{appTitle}</h1>
    </StyledMainTitle>
  );
};

export default MainTitle;
