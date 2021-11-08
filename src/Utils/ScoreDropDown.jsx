import React, { useContext } from "react";
import styled from "styled-components";
import { CombatantContext } from "../Contexts/CombatantContext";
import Button from "./Button";

const StyledScoreDropDown = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.5rem;
  z-index: 10;
`;

const ScoreDropDown = ({ combatantData, index }) => {
  const { combatantList } = useContext(CombatantContext);
  console.log(combatantList.combatantRowColor);
  return (
    <StyledScoreDropDown
      style={{ backgroundColor: combatantData[index].combatantRowColor }}
    >
      <Button text="Player" />
      <Button text="Monster" />
      <Button text="NPC" />
    </StyledScoreDropDown>
  );
};

export default ScoreDropDown;
