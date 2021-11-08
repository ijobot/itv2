import React, { useContext } from "react";
import styled from "styled-components";
import { CombatantContext } from "../Contexts/CombatantContext";
import Button from "./Button";

const StyledTypeDropDown = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.5rem;
  z-index: 10;
`;

const TypeDropDown = ({ index }) => {
  const { combatantRowColor } = useContext(CombatantContext);
  console.log(combatantRowColor);
  return (
    <StyledTypeDropDown style={{ backgroundColor: combatantRowColor }}>
      <Button text="Player" />
      <Button text="Monster" />
      <Button text="NPC" />
    </StyledTypeDropDown>
  );
};

export default TypeDropDown;
