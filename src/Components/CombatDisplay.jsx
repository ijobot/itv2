import React from "react";
import styled from "styled-components";
import Combatants from "./Combatants";

const StyledCombatDisplay = styled.div`
  grid-area: display;
  background-color: var(--boxColor);
  border: var(--border);
  border-right: 2px;
  padding: 0.5rem;
  z-index: 2;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: var(--borderColor);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--generalColor);
    height: 100px;
  }
`;

const CombatDisplay = () => {
  return (
    <StyledCombatDisplay>
      <Combatants />
    </StyledCombatDisplay>
  );
};

export default CombatDisplay;
