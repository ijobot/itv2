import React, { useContext } from "react";
import styled from "styled-components";
import { CombatantContext } from "../Contexts/CombatantContext";
import Button from "../Utils/Button";

const StyledCombatant = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr 2fr 0.5fr;
  align-items: center;
  padding: 0.5rem;
  border: 2px solid rgba(0, 0, 0, 0.3);

  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

const StyledDetails = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Combatant = ({ combatantData, index }) => {
  const { removeCombatant } = useContext(CombatantContext);
  return (
    <StyledCombatant
      style={{ backgroundColor: combatantData.combatantRowColor }}
    >
      <StyledDetails>{combatantData.combatantType}</StyledDetails>
      <StyledDetails>{combatantData.name}</StyledDetails>
      <StyledDetails>{combatantData.score}</StyledDetails>
      <Button
        text="X"
        color="#6a5d83"
        onClick={() => removeCombatant(index)}
        small
      />
    </StyledCombatant>
  );
};

export default Combatant;
