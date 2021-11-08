import React from "react";
import styled from "styled-components";
import EntryButtonCollection from "./EntryButtonCollection";
import ClearButton from "./ClearButton";

const StyledMenuDisplay = styled.div`
  grid-column-start: 2;
  grid-row-start: 4;
  justify-content: space-between;
  background-color: #0c0122;
  border: 2px solid #6a5d83;
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
