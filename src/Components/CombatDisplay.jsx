import React from "react";
import styled from "styled-components";
import Combatants from "./Combatants";

const StyledCombatDisplay = styled.div`
  grid-column: 4 / 5;
  grid-row: 2/5;
  background-color: var(--boxColor);
  border: var(--border);
  padding: 0.5rem;
  z-index: 2;
`;

const CombatDisplay = () => {
  return (
    <StyledCombatDisplay>
      <Combatants />
    </StyledCombatDisplay>
  );
};

export default CombatDisplay;
