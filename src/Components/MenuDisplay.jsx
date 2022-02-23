import React from "react";
import styled from "styled-components";
import EntryButtonCollection from "./EntryButtonCollection";

const StyledMenuDisplay = styled.div`
  grid-area: buttons;
  justify-content: space-between;
  background-color: var(--boxColor);
  border: var(--border);
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  z-index: 2;
  max-height: 649px;

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 820px) {
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 425px) {
    flex-direction: row;
    justify-content: space-evenly;
    max-width: calc(100%-2rem);
  }
`;

const MenuDisplay = () => {
  return (
    <StyledMenuDisplay>
      <EntryButtonCollection />
    </StyledMenuDisplay>
  );
};

export default MenuDisplay;
