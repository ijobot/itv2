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

  @media only screen and (max-width: 1024px) {
    h1 {
      font-size: 45px;
    }
  }

  @media only screen and (max-width: 820px) {
    h1 {
      font-size: 40px;
    }
  }

  @media only screen and (max-width: 820px) {
    h1 {
      font-size: 35px;
      display: inline-block;
      margin-right: 10px;
    }
  }

  @media only screen and (max-width: 520px) {
    h1 {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 380px) {
    h1 {
      font-size: 25px;
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
