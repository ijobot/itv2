import React from "react";
import styled from "styled-components";
import EntryButtonCollection from "./EntryButtonCollection";
import ClearButton from "./ClearButton";

const StyledMenuDisplay = styled.div`
  grid-column-start: 2;
  grid-row-start: 4;
  justify-content: space-between;
  background-color: var(--boxColor);
  border: var(--border);
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

const MenuDisplay = () => {
  return (
    <StyledMenuDisplay>
      <EntryButtonCollection />
      <ClearButton />
    </StyledMenuDisplay>
  );
};

export default MenuDisplay;
