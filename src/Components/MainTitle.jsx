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

  @media only screen and (max-width: 425px) {
    padding-top: 10px;
  }

  @media only screen and (max-width: 1100px) {
    h1 {
      font-size: 3.2rem;
    }
  }
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
