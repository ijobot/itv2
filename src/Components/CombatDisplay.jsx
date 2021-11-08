import React from "react";
import styled from "styled-components";
import Combatants from "./Combatants";

const StyledCombatDisplay = styled.div`
  grid-column: 4 / 5;
  grid-row: 2/5;
  color: #000000;
  background-color: #0c0122;
  border: 2px solid #6a5d83;
  padding: 0.5rem;
`;

const CombatDisplay = () => {
  return (
    <StyledCombatDisplay>
      <Combatants />
    </StyledCombatDisplay>
  );
};

export default CombatDisplay;
