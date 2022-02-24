import React from "react";
import styled from "styled-components";
import EntryButtonCollection from "./EntryButtonCollection";

const StyledMenuDisplay = styled.div`
  grid-area: buttons;
  justify-content: space-between;
  background-color: var(--boxColor);
  border-top: var(--borderTop);
  border-right: 8px solid var(--borderColorLight);
  border-bottom: var(--borderBottom);
  border-left: var(--borderRight);
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  z-index: 2;
  max-height: 500px;

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
