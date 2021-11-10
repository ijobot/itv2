import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { CombatantContext } from "../Contexts/CombatantContext";

const StyledTypeDropDown = styled.div`
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem;
  z-index: 10;
  background-color: #0c0122;
  border: 2px solid #6a5d83;
`;

const TypeDropDown = ({ index }) => {
  const { handleTypeChange } = useContext(CombatantContext);
  return (
    <StyledTypeDropDown>
      <Button
        text="Player"
        color="#8CBA80"
        onClick={() => handleTypeChange("Player", "#8CBA80", index)}
        marginButton
      />
      <Button
        text="Monster"
        color="#DA4167"
        onClick={() => handleTypeChange("Monster", "#DA4167", index)}
        marginButton
      />
      <Button
        text="NPC"
        color="#2E86AB"
        onClick={() => handleTypeChange("NPC", "#2E86AB", index)}
        marginButton
      />
    </StyledTypeDropDown>
  );
};

export default TypeDropDown;
