import React from "react";
import styled from "styled-components";

const StyledMainTitle = styled.div`
  grid-area: title;
  line-height: 0.8;
  background-color: var(--boxColor);
  border-top: var(--borderTop);
  border-right: 8px solid var(--borderColorLight);
  border-bottom: var(--borderBottom);
  border-left: var(--borderRight);
  padding: 0.6rem 0rem 0.4rem;
  z-index: 2;
  height: auto;
  width: auto;

  @media only screen and (max-width: 1030px) {
    h1 {
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 820px) {
    h1 {
      display: inline-block;
      margin-right: 10px;
      font-size: 4.5rem;
    }
  }

  @media only screen and (max-width: 550px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

const MainTitle = () => {
  const battle = "Battle";
  const plan = "Plan";
  return (
    <StyledMainTitle>
      <h1>{battle}</h1>
      <h1>{plan}</h1>
    </StyledMainTitle>
  );
};

export default MainTitle;
