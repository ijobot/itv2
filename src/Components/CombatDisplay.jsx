import React from "react";
import styled from "styled-components";
import Combatants from "./Combatants";

const StyledCombatDisplay = styled.div`
  grid-area: display;
  background-color: var(--boxColor);
  border-top: var(--borderTop);
  border-right: var(--borderRight);
  border-bottom: var(--borderBottom);
  border-left: 8px solid var(--borderColorLight);
  padding: 0.5rem;
  z-index: 2;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 4px;
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
